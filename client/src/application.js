import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignUp from './spec/sign-up/sign-up';
import Chat from './spec/chat/chat';

const App = () => (
    <Router>
        <Route path='/' exact component={SignUp} />
        <Route path='/chat' exact component={Chat} />
    </Router>
);

export default App;