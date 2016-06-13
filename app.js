const Server = require('./server.js');
const port = (process.env.PORT || 1234);
const app = Server.app();

if (process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  }).listen(config.ui.port, config.ui.host, function(err) {
    if (err) console.log(err);
    console.log('Listening at ' + config.ui.host + ':' + config.ui.port);
  });
}

else {
  app.listen(port);
  console.log(`Listening at http://localhost:${port}`);
}