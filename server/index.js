const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');
const router = require('./router');

const { addUser, getUser } = require('./users/users');

const { saveMessage, getMessages } = require('./messages/messages');

const PORT = process.env.PORT || 11010;

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
    socket.on('join', async ({ username, password }, callback) => {
        const { user, error } = await addUser({ id: socket.id, username, password });
        console.log(error);
        if(error) {
            return callback(error);
        }
        socket.join(user.username);

        const messages = await getMessages();

        callback({data: messages});
    });

    socket.on('sendMessage', async (message, callback) => {
        const user = await getUser(socket.id);

        saveMessage(user.username, message);

        io.emit('message', { user: user.username, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        console.log('socket disconnected!');
    });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));