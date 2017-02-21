var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 entry: './client/main.js',
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
             },
             exclude: /node_modules/,
        },
        {
            test: /\.jsx$/,
            loader: "babel-loader",
            query: {
                presets: ['es2015', 'react']
            },
            exclude: /node_modules/,
        },
        {
            test: /\.less$/,
            loader: "style!css!less",            
            exclude: /node_modules/,
        }
     ]
 },
 stats: {
     colors: true
 },
 devtool: 'source-map'
};