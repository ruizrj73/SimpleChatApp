import React from 'react';

import './input-box.css';

const InputBox = ({ setMessage, sendMessage, message }) => (
	<form className="form">
		<div className='inputBoxContainer'>
			<input
				className="inputBox"
				type="text"
				placeholder="Start a new message"
				value={message}
				onChange={({ target: { value } }) => setMessage(value)}
				onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
			/>
		</div>
		<div className='sendbuttonContainer'>
			<button className="sendButton" onClick={e => sendMessage(e)}>Send</button>
		</div>
	</form>
)

export default InputBox;