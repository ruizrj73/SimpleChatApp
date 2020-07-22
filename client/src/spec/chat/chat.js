import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import ChatHeader from '../chat-header/chat-header';
import MessageList from '../message-list/message-list';
import InputBox from '../input-box/input-box';

import './chat.css';

let socket

const Chat = ({ location }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:11010';

    useEffect(() => {
        const { username, password } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setUsername(username);
        setPassword(password);

        socket.emit('join', { username, password }, (response) => {
            const data = response.data;
            const error = response.error;
            if(error) {
                console.log(error);
                return;
            }
            
            const msgs = messages;
            for(var i = 0; i < data.length; i++) {
                const msg = { user: data[i].sender, text: data[i].message };
                msgs.push(msg);
            }
            setMessages([...messages, msgs]);
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    const sendMessage = (event) => {
        event.preventDefault();

        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className='outerContainer'>
            <div className='innerContainer'>
                <ChatHeader />
                <MessageList messages={messages} username={username} />
                <InputBox message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    )
}

export default Chat;