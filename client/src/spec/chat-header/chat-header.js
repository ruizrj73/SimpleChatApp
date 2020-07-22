import React from 'react';

import './chat-header.css';

const ChatHeader = () => (
    <div className='chatHeaderOuterContainer'>
        <div className='chatHeaderInnerCenterContainer'>
            <h3>Chat app</h3>
        </div>
        <div className='chatHeaderInnerRightContainer'>
            <a href='/' className='logoutButton'>Log out</a>
        </div>
    </div>
)

export default ChatHeader;