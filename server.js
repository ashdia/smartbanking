var WebpackDevServer = require('webpack-dev-server'),
  config = require('./webpack.config');
  webpack = require('webpack');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true
}).listen(config.ui.port, config.ui.host, function(err) {
  if (err) console.log(err);
});