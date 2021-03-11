const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const replaceExt = require('replace-ext');
const _ = require('lodash');
const SingleEntryPlugin = require('webpack/lib/EntryPlugin');
// const MultiEntryPlugin = require('webpack/lib/MultiEntryPlugin');

class EntryExtractPlugin {
  constructor() {
    this.appContext = null;
    this.pages = [];
    this.entries = [];
  }

  /**
*	收集app.json文件中註冊的pages和subpackages生成一個待處理數組
*/
  getPages() {
    const app = path.resolve(this.appContext, 'app.json');
    const content = fs.readFileSync(app, 'utf8');
    const { pages = [], subpackages = [] } = JSON.parse(content);
    const { length: pagesLength } = pages;
    if (!pagesLength) {
    console.log(chalk.red('ERROR in "app.json": pages字段缺失'));
    process.exit();
    }
    /** 收集分包中的頁面 */
    const { length: subPackagesLength } = subpackages;
    if (subPackagesLength) {
      subpackages.forEach((subPackage) => {
        const { root, pages: subPages = [] } = subPackage;
        if (!root) {
          console.log(chalk.red('ERROR in "app.json": 分包配置中root字段缺失'));
          process.exit();
        }
        const { length: subPagesLength } = subPages;
        if (!subPagesLength) {
          console.log(chalk.red(`ERROR in "app.json": 當前分包 "${root}" 中pages字段為空`));
          process.exit();
        }
        subPages.forEach((subPage) => pages.push(`${root}/${subPage}`));
      });
    }
    return pages;
  }
  /**
  *	以頁面為起始點遞歸去尋找所使用的組件
  *	@param {String} 當前文件的上下文路徑
  *	@param {String} 依賴路徑
  * @param {Array} 包含全部入口的數組
  */
  addDependencies(context, dependPath, entries) {
    /** 生成絕對路徑 */
    const isAbsolute = dependPath[0] === '/';
    let absolutePath = '';
    if (isAbsolute) {
      absolutePath = path.resolve(this.appContext, dependPath.slice(1));
    } else {
      absolutePath = path.resolve(context, dependPath);
    }
    /** 生成以源代碼目錄為基準的相對路徑 */
    const relativePath = path.relative(this.appContext, absolutePath);
    /** 校驗該路徑是否合法以及是否在已有入口當中 */
    const jsPath = replaceExt(absolutePath, '.js');
    const isQualification = fs.existsSync(jsPath);
    if (!isQualification) {
      console.log(chalk.red(`ERROR: in "${replaceExt(relativePath, '.js')}": 當前文件缺失`));
      process.exit();
    }
    const isExistence = entries.includes((entry) => entry === absolutePath);
    if (!isExistence) {
      entries.push(relativePath);
    }
    /** 獲取json文件內容 */
    const jsonPath = replaceExt(absolutePath, '.json');
    const isJsonExistence = fs.existsSync(jsonPath);
    if (!isJsonExistence) {
      console.log(chalk.red(`ERROR: in "${replaceExt(relativePath, '.json')}": 當前文件缺失`));
      process.exit();
    }
    try {
      const content = fs.readFileSync(jsonPath, 'utf8');
      const { usingComponents = {} } = JSON.parse(content);
      const components = Object.values(usingComponents);
      const { length } = components;
    /** 當json文件中有再引用其他組件時執行遞歸 */
      if (length) {
        const absoluteDir = path.dirname(absolutePath);
        components.forEach((component) => {
          this.addDependencies(absoluteDir, component, entries);
        });
      }
    } catch (e) {
      console.log(chalk.red(`ERROR: in "${replaceExt(relativePath, '.json')}": 當前文件內容為空或書寫不正確`));
      process.exit();
    }
  }
  /**
  * 將入口加入到webpack中
  * webpack 5中不再有MultiEntryPlugin，此处可以多次EntryPlugin代替
  */
  applyEntry(context, entryName, module) {
    if (Array.isArray(module)) {
      module.forEach(item => {
        return new SingleEntryPlugin(context, item, entryName);
      })
    }
      return new SingleEntryPlugin(context, module, entryName);
  }
  apply(compiler) {
    /** 設置源代碼的上下文 */
    const { context } = compiler.options;
    this.appContext = context;
    compiler.hooks.entryOption.tap('EntryExtractPlugin', () => {
    /** 生成入口依賴數組 */
      this.pages = this.getPages();
      this.pages.forEach((page) => void this.addDependencies(context, page, this.entries));
      this.entries.forEach((entry) => {
        this.applyEntry(context, entry, `./${entry}`).apply(compiler);
      });
    });
    compiler.hooks.watchRun.tap('EntryExtractPlugin', () => {
      /** 校驗頁面入口是否增加 */
      const pages = this.getPages();
      const diffPages = _.difference(pages, this.pages);
      const { length } = diffPages;
      if (length) {
        this.pages = this.pages.concat(diffPages);
        const entries = [];
        /** 通過新增的入口頁面建立依賴 */
        diffPages.forEach((page) => void this.addDependencies(context, page, entries));
        /** 去除與原有依賴的交集 */
        const diffEntries = _.difference(entries, this.entries);
        diffEntries.forEach((entry) => {
          this.applyEntry(context, entry, `./${entry}`).apply(compiler);
        });
        this.entries = this.entries.concat(diffEntries);
      }
    });
  }
}

module.exports = EntryExtractPlugin;