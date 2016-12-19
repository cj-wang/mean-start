import * as socketio from 'socket.io';

export default function (server) {
  var io = socketio(server);
  io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
      console.log('message: ' + msg);
      io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });
};
