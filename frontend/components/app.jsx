import React from 'react';
import NavBarContainer from './navbar/nav_bar_container';
import SignUpContainer from './signup/signup_container'
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Route path="/" component={NavBarContainer}/>
    </div>
);

export default App;