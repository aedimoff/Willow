import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import NavBarContainer from './navbar/nav_bar_container';
import HomePage from './home/home_page';

const App = () => (
    <div>
        <Modal className="modal"/>
        <Route path="/" component={NavBarContainer}/>
        <Route path="/" component={HomePage}/>
    </div>
);

export default App;

