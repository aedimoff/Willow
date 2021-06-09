import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from './modal/modal';
import ListingShow from './listing/listing_show';
import NavBarContainer from './navbar/nav_bar_container';
import HomePage from './home/home_page';
import WelcomeContainer from './home/welcome_container';

const App = () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                 <Route path="/" component={NavBarContainer}/>
            </Link>
        </header>
        <ProtectedRoute to="/home" component={HomePage}/>
        <Switch>
            <AuthRoute to="/welcome" component={WelcomeContainer}/>
        </Switch>
        <Modal className="modal"/>
    </div>
);

export default App;

