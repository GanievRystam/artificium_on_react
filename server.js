const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server,{
  cors: {
    origin: '*',
  }
});

const rooms = new Map();

app.use(express.json());

app.get('/rooms/:id', (req, res) => {
  const {id: roomId} = req.params;
  const obj = rooms.has(roomId) ? {
    users: [...rooms.get(roomId).get('users').values()],
    messages: [...rooms.get(roomId).get('messages').values()],
  } : {users: [], messages:[]}
  res.json(obj);
});

app.post('/rooms', (req, res) => {
  const {roomId, userName} = req.body;
  if(!rooms.has(roomId)) {
    rooms.set(
      roomId, 
      new Map([
      ['users', new Map()],
      ['messages', []],
    ]));
  }
  res.send();
});


io.on('connection', socket => {
  socket.on('ROOM:join', ({roomId, userName}) => {
    rooms.get(roomId).get('users').set(socket.id, userName);
    const users = [...rooms.get(roomId).get('users').values()];
    socket.to(roomId).emit('ROOM:joined', users);
  });

  socket.on('ROOM:NEW_MESSAGE', ({roomId, userName, text}) => {
    const obj = {
      userName,
      text,
    }
    rooms.get(roomId).get('messages').push(obj);
    socket.broadcast.to(roomId).emit('ROOM:NEW_MESSAGE', obj);
  });

  socket.on('disconnect', () => {
    rooms.forEach((value, roomId) => {
      if(value.get('users').delete(socket.id)) {
        const users = [...rooms.get(roomId).get('users').values()];
        socket.broadcast.to(roomId).emit('ROOM:SET_USERS', users);
      }
    });
  });
});


server.listen(8080, (err) => {
  if(err) {
    throw Error(err);
  }
  console.log('Сервер запущен');
});