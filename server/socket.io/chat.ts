import * as sio from 'socket.io';

const chatServer = sio({
  path: '/socket.io/chat'
});

chatServer.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    chatServer.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

export default chatServer;
