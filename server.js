var webpack = require('webpack'),
	WebpackDevServer = require('webpack-dev-server'),
  	config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  hot: true
}).listen(config.ui.port, config.ui.host, function(err) {
  if (err) console.log(err);
});