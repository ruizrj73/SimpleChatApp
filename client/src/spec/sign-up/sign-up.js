import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './sign-up.css';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='signUpOuterContainer'>
            <div className='signUpInnerContainer'>
                <div className='signUpHeader'>
                    <h3>Chat app</h3>
                </div>
                <div className='inputContainer'>
                    <input placeholder='User name' className='signUpInput' type='text' onChange={(event) => setUsername(event.target.value)} />
                    <input placeholder='password' className='signUpInput' type="password" onChange={(event) => setPassword(event.target.value)} />
                </div>
                <Link onClick={event => (!username || !password) ? event.preventDefault() & alert('username & password cannot be blank') : null} to={`/chat?username=${username}&password=${password}`}>
                    <button className='signUpButton' type='submit'>Sign up / Log in</button>
                </Link>
                <div className='footerText'>
                    By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by searching for your email address or phone number when provided.
                </div>
            </div>
        </div>
    )
}

export default SignUp;