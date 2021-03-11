# 基于webpack 5微信小程序工程化的@antv/f2本地封装使用案例

## 启动项目
`npm run build`

## 工程化关键步骤：
- 指定miniprogramRoot
```javascript
{
  ...
  "miniprogramRoot":"dist",
  ...
}

注意：若写成'/dist', 模拟器上可以正常运行，但真机调试时会显示'app.json'找不到
```
- 开始webpack watch监听
  - 监听文件修改以实现自动重新构建，无需每次运行`npx webpack`

- 入口文件自动注入插件
  - 无需每新建一个页面就重新配置一下`webpack.config.js`文件

## 由于webpack 5出现的问题
- splitChunks
```text
TypeError: Cannot read property 'webpackChunk' of undefined
```

- SingleEntryPlugin/MultiEntryPlugin
```text
升级到webpack5之后，这两个插件就没了，取而代之的是EntryPlugin，用法如SingleEntryPlugin；MultiEntryPlugin可以用EntryPlugin多次利用代替；
```


## 感谢以下文章
- [微信小程序工程化探索之webpack實戰](https://codertw.com/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80/742008/)
- [小程序工程化实践](https://github.com/listenzz/MyMina)
- [webpack兼容性](https://github.com/cascornelissen/svg-spritemap-webpack-plugin/issues/108)