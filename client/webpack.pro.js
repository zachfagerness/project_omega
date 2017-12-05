const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
      path: path.resolve(__dirname, 'bin'),
      filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
   module: {
       loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         },
         { test: /\.css$/, loader: "style-loader!css-loader" }
       ]
   }
};
