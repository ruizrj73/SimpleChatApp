import React from 'react';

import './message.css';

const Message = ({ message: { text, user }, username }) => {
	let isSentByCurrentUser = false;

	if (user === username) {
		isSentByCurrentUser = true;
	}

	if (!text) {
		return null;
	}

	return (
		isSentByCurrentUser
			? (
				<div className="messageContainer justifyEnd">
					<div className="messageBox you">
						<p className="messageText colorWhite">{text}</p>
					</div>
					<div className="messageSelf">
						<p className="sentText">You</p>
					</div>
				</div>
			)
			: (
				<div className="messageContainer justifyStart">
					<div className="messageBox other">
						<p className="messageText colorWhite">{text}</p>
					</div>
					<div>
						<p className="sentText pr-10">{user}</p>
					</div>
				</div>
			)
	);
}

export default Message;