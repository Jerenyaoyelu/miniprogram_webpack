const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const EntryPlugin = require('./plugins/EntryExtractPlugin');
const ABSOLUTE_PATH = process.cwd();

module.exports = {
  context: path.resolve(ABSOLUTE_PATH, 'src'),
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(ABSOLUTE_PATH, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /src\/components$/],
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
    ),
    new EntryPlugin()
  ],
  watchOptions: {
    aggregateTimeout: 200,
    ignored: /node_modules/,
    poll: 1000
  },
  mode: 'none',
}