import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { LoggedInProtectedRoute, LoggedOutProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import UserContainer from './user/user_container';
import NavBarContainer from './navbar/nav_bar_container';
import HomeContainer from './home/home_container';
import SearchContainer from '../components/search/search_container'
import WelcomeContainer from './home/welcome_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <NavBarContainer />
            </Link>
        </header>
        <Switch>
            <LoggedInProtectedRoute path="/home" component={HomeContainer} redirectPath="/"/>
            <LoggedInProtectedRoute path="/users/:userId" component={UserContainer} redirectPath="/"/>
            <LoggedOutProtectedRoute path="/" component={WelcomeContainer} redirectPath="/home" />
        </Switch>
    
        {/* <AuthRoute to="/test" component={User} redirectPath="/home"/> */}
        <Modal className="modal"/>
    </div>
);

export default App;

