var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 entry: './client/app.js',
 output: {
     path: __dirname + '/public/build/',
     publicPath: "build/",
     filename: 'app.bundle.js'
 },
 module: {
     loaders: [
         {
             test: /\.js$/,
             loader: 'babel-loader',
             query: {
                 presets: ['es2015', 'react']
             }
         }
     ]
 },
 stats: {
     colors: true
 },
 devtool: 'source-map'
};