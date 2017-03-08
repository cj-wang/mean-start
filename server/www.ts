import * as http from 'http';
import * as debugModule from 'debug';

import app from './app';

const debug = debugModule('express-start:server');

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

// create server and listen on provided port (on all network interfaces).
const server = http.createServer(app);

// socket.io
const sioModules = require('require-all')({
  dirname: __dirname + '/socket.io',
  filter: (filename: string) => {
    filename = filename.toLowerCase();
    if ((filename.endsWith('.ts') && !filename.endsWith('.spec.ts'))
      || (filename.endsWith('.js') && !filename.endsWith('.spec.js'))) {
      return filename.substr(0, filename.length - 3);
    }
  }
});
for (let name of Object.keys(sioModules)) {
  const exported = sioModules[name].default;
  if (exported && exported.constructor.name === 'Server') {
    console.log(`Add socket.io server ${name}`);
    const sioServer = exported as SocketIO.Server;
    sioServer.attach(server);
  }
}

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: any): number | string | boolean {
  let port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  let bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;

  debug('Listening on ' + bind);
  console.log('Listening on ' + bind);
}
