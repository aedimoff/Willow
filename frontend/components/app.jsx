import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Modal />
        <header>
            {/* <h1>Willow</h1> */}
            <GreetingContainer/>
        </header>
        <Route path="/" component={NavBarContainer}/>
        {/* <Route path="/login" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer}/> */}
    </div>
);

export default App;