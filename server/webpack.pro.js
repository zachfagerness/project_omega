const path = require('path');
const webpack = require('webpack');
//const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  entry: [
    './index.js'
  ],
  output: {
      filename: 'bundle.js'
  },
  target: 'node',
  plugins: [


  ],
   module: {
       loaders: [
         {
             test: /\.js$/,
             exclude: /node_modules/,
             loader: 'babel-loader'
         }
       ]
   }
};
