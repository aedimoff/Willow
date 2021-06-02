import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_form_container';
import SignupContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <header>
            <h1>Willow</h1>
            <GreetingContainer/>
        </header>

        <Route path="/login" component={LoginContainer}/>
        <Route path="/signup" component={SignupContainer}/>
    </div>
);

export default App;