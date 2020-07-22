import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './message/message';

import './message-list.css';

const MessageList = ({ messages, username }) => (
    <ScrollToBottom className="messageList">
        {messages.map((message, i) => <div key={i}><Message message={message} username={username} /></div>)}
    </ScrollToBottom>
);

export default MessageList;