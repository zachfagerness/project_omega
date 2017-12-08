const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: [
      './index.js'
    ],
    devtool: 'eval-source-map',
    devServer: {
      hot:true,
      inline:true,
      contentBase: '/'
    },
    output: {
        filename: 'bundle.js'
    },
    target: 'node',
    plugins: [
      new webpack.HotModuleReplacementPlugin()
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
