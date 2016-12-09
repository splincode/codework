'use strict';

const NODE_ENV = process.env.NODE_ENV || 'default';
const NODE_MINIFIED = process.env.NODE_MINIFIED || 'false';
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {

  context: __dirname, // точка входа в приложение

  entry: { // точки входа
    core: './app/js/core.js',
    app: './app/js/app.module.js'
  },

  output: { // выходные файлы
    path: '../public/',
    publicPath: '',
    filename: 'js/[name].js',
  },

  devtool: (NODE_MINIFIED !== 'true') ? 'source-map' : null,

  watch: (NODE_MINIFIED !== 'true') ? true : false, 
  watchOptions: {
    aggregateTimeout: 100
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV', 'NODE_MINIFIED']),
    new webpack.DefinePlugin({ 
      NODE_ENV: JSON.stringify(NODE_ENV),
      NODE_MINIFIED: JSON.stringify(NODE_MINIFIED),
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        Hammer: 'hammerjs/hammer'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['app', 'core']
    }),
    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      theme: NODE_ENV,
      template: 'app/my-index.ejs',
      cache: true,
      showErrors: true,
      inject: 'body',
      minify: (NODE_MINIFIED === 'true') ? {
        collapseWhitespace: true,
        removeComments: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        empty: true,
        cdata: true,
        useShortDoctype: true
      } : false
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'core',
    }),
  ],

  module: {

    loaders: [
        { // используем ES6 to ES5
          exclude: /(node_modules|bower_components)/,
          test: /\.js$/,
          loader: 'babel?presets[]=es2015&compact=true',
        },
        {
          exclude: /(node_modules|bower_components)/,
          test: /\.html$/,
          loader: 'html'
        },
        { 
          exclude: /(node_modules|bower_components)/,
          test   : /\.scss$/,
          loaders: ['style', 'css', 'resolve-url', 'sass?sourceMap']
        },

        { 
          exclude: /(node_modules|bower_components)/,
          test: /\.jade$/,
          loader: "jade",
          query: {
            pretty: true,
          }
        }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, "./some-folder")]
  },

  htmlLoader: {
    ignoreCustomFragments: [/\{\{.*?}}/],
    root: path.resolve(__dirname, 'source'),
    attrs: ['img:src', 'link:href']
  },

  resolveUrlLoader: {
     keepQuery: true,
     absolute: true
  },

  

};

if (NODE_MINIFIED === 'true') {

  module.exports.plugins.push( // оптимизация файлов JS
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: true,
        drop_console:true,
        unsafe: true
      }
    })
  );

}