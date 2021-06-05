import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import NavBarContainer from './navbar/nav_bar_container';
import HomePage from './home/home_page';
import Welcome from './home/welcome';

const App = () => (
    <div>
        <Modal className="modal"/>
        <header>
            <Link to="/" className="header-link">
                 <Route path="/" component={NavBarContainer}/>
            </Link>
        </header>
        <AuthRoute to="/welcome" component={Welcome}/>
        <ProtectedRoute to="home" component={HomePage}/>
    </div>
);

export default App;

