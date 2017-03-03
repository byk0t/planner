var path = require('path');
var webpack = require('webpack');
 
module.exports = {
 entry: './src/client/main.jsx',
 output: {
     path: __dirname + '/public/client-build/',
     publicPath: "client-build/",
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
            loader: "style-loader!css-loader!less-loader",
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            loader: "style-loader!css-loader"
        },
        {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=8192'
        }
     ]
 },
 stats: {
     colors: true
 },
 devtool: 'source-map'
};