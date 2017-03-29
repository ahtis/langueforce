const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  ENV: ENV,
  HOST: HOST,
  PORT: PORT
});

module.exports = function(env) {
   return webpackMerge(commonConfig({env: ENV}), {
    devtool: 'source-map',

    output: {
      path: helpers.root('dist'),
      filename: '[name].bundle.js',
      publicPath: '/',      
      sourceMapFilename: '[name].map'
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
          include: [helpers.root('src', 'styles')]
        },
        {
          test: /\.scss$/,
          loader:  ['raw-loader', 'sass-loader'],
          include: [helpers.root('src', 'styles')]
        }
      ]
    },

    plugins: [
      new LoaderOptionsPlugin({
        minimize: true,
        debug: false
      }),
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV)
        }
      }),
      new UglifyJsPlugin({
        beautify: false,
        warnings: false,
        mangle: {
          screw_ie8: true,
          keep_fname: true
        },
        compress: {
          screw_ie8: true,
          warnings: false,
          conditionals: true,
          unused: true,
          comparisons: true,
          sequences: true,
          dead_code: true,
          evaluate: true,
          if_return: true,
          join_vars: true,
          negate_iife: false
        },
        output: {
          comments: false
        }
      })
    ]
  });
}