var httpProxy = require('http-proxy');
var port = process.env.PORT || 5000;
var server = process.env.NEW_BASE_URL;
var proxy = httpProxy.createServer({
  target: server,
  xfwd: true,
  changeOrigin: false,
  autoRewrite: true
});

proxy.listen(port);

proxy.on('error', function (err, req, res) {
  res.writeHead(500, {
    'Content-Type': 'text/plain'
  });

  res.end('Something went wrong. And we are reporting a custom error message.');
});
