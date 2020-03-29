const HtmlWebpackPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

console.log(__dirname) // /Users/jbn/Documents/study/javascript/ts-basic/sourcecode/client-side/build
const path = require('path')
console.log(path.resolve('.')) // /Users/jbn/Documents/study/javascript/ts-basic/sourcecode/client-side
module.exports = {
  mode: 'none',
  entry: './src/index.ts',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [{
      test: /.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    stats: 'errors-only',
    inline: true,
    host: 'localhost',
    port: 8080,
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['./dist']
    }),
    new HtmlWebpackPlugin({
      template: './src/template/index.html'
    })
  ]
};