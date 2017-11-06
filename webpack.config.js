const path = require('path');
const webpack = require("webpack");


module.exports = {
  entry : './src/index.ts',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: 'tslint-loader',
        options: {
          configFile: path.resolve(__dirname, 'node_modules/airbnb-style/linters/tslint.json'),
          formatter: 'codeFrame',
          typeCheck: true
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      minimize: true
    })
  ]
};
