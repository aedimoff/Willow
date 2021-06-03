import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Modal className="modal"/>
        <Route path="/" component={NavBarContainer}/>
    </div>
);

export default App;