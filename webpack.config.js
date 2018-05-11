var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: {
         page: './src/js/page.js',
         layout: './src/js/layout.js',
         router: './src/js/router.js',
         main: './src/js/main.js'
     },
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: '[name].bundle.js'
     },
     module: {
         rules: [
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 loader: 'babel-loader',
             }
         ]
     },
     stats: {
         colors: true
     }
 };