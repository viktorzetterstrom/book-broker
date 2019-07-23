const db = require('../db');

const messageHandler = (io) => (socket) => {
  console.log('a user connected');
  socket.on('disconnect', function () {
    console.log('user disconnected');
  });
  socket.on('chat message', ({ message, tradeId, userId }) => {
    db.message.add(message, tradeId, userId, (err, { username, timestamp }) => {
      io.emit(tradeId, { message, username, timestamp });
    });
  });
};

module.exports = messageHandler;