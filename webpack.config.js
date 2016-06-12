const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');

const ui = {
  protocol: process.env.UI_PROTOCOL || 'http',
  host: process.env.UI_HOST || '0.0.0.0',
  port: process.env.PORT || process.env.UI_PORT || 1234
};

module.exports = {
  entry: {
    app: [
      'webpack-hot-middleware/client',
      './src/index.js'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '/dist/'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js', '.scss', '.css'],
    modulesDirectories: ['node_modules', 'src']
  },

  resolveLoader: {
    modulesDirectories: ['web_loaders', 'web_modules', 'node_loaders', 'node_modules', 'webpack_loaders']
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEVELOPMENT__: true,
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      cdn: path.join(__dirname, '/src/'),
      chunks: ['app'],
      favicon: './src/styles/icons/favicon.png'
    }),
    new ExtractTextPlugin('[name].bundle.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  ui: ui,

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel-loader'],
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
  },

  postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      }),
      postcssImport({
        addDependencyTo: webpack
      })
    ];
  },

  eslint: {
    configFile: '.eslintrc'
  }
};
