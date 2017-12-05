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
      contentBase: 'www'
    },
    output: {
        filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
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
