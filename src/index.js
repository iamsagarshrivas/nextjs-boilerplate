const http = require('http');
const { port, apiRoot, ip, mongo, seed, env } = require('./config');
const express = require('./middleware/express');
const routes = require('./routes'); 

const app = express(apiRoot, routes)
const server = http.createServer(app)

setImmediate(() => {
  server.listen(port, ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', ip, port, env)
  })
});

module.exports = app;