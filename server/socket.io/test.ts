export default function (sio: SocketIO.Server) {
  sio.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
      console.log('message: ' + msg);
      sio.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });
};
