const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const ABSOLUTE_PATH = process.cwd();

module.exports = {
  context: path.resolve(ABSOLUTE_PATH, 'src'),
  entry: {
    app: './app.js',
    'pages/index/index': './pages/index/index.js',
    "pages/logs/logs": "./pages/logs/logs.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(ABSOLUTE_PATH, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime'],
          },
        },
      },
    ]
  },
  plugins: [
    new CopyPlugin(
      {
        patterns: [
          {
            from: '**/*.wxml',
            to: './',
          },
          {
            from: '**/*.wxss',
            to: './',
          },
          {
            from: '**/*.json',
            to: './',
          }
        ]
      }
    )
  ],
  watch: true,
  watchOptions: {
    aggregateTimeout: 200,
    ignored: /node_modules/,
    poll: 1000
  },
  mode: 'none',
}