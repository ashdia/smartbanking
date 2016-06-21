const path = require('path');
const postcssImport = require('postcss-import');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ui = {
  protocol: process.env.UI_PROTOCOL || 'http',
  host: process.env.UI_HOST || 'localhost',
  port: process.env.UI_PORT || 1234
};

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ],
	vendor: [
		'babel-polyfill',
		'classnames',
		'intl',
		'lodash',
		'moment',
		'react',
		'redux',
    'react-bootstrap',
    'react-copy-to-clipboard',
    'react-dom',
    'react-infinite',
    'react-intl',
    'react-list',
    'react-redux',
    'react-router',
    'react-router-redux',
		'redux-form',
    'redux-logger',
    'redux-promise',
		'redux-thunk'
		]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
    modulesDirectories: ['node_modules', 'src'],
  },

  resolveLoader: {
    modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', 'node_modules', 'webpack_loaders']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.DefinePlugin({
      __DEVELOPMENT__: false,
      'process.env': {
        NODE_ENV: '"production"',
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      cdn: path.join(__dirname, '/src/'),
      chunks: ['vendor', 'app'],
      favicon: './src/styles/icons/favicon.png'      
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })
  ],

  ui: ui,

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: [/node_modules/, /webpack_loaders/]
    }, {
      test: /\.js$/,
      loader: 'eslint-loader'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css!postcss!sass')
    }, {
      test: /\.(png|jpg|gif|ico)$/,
      loader: 'url-loader?limit=8192'
    }, {
      test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
      loader: 'file-loader'
    }, {
      test: /\.properties/,
      loader: 'locale-loader'
    }]
  }
};
