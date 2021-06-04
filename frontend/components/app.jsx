import React from 'react';
import { Route } from 'react-router-dom';
import Modal from './modal/modal';
import NavBarContainer from './navbar/nav_bar_container';
import ListingIndexContainer from './listing/listing_index_container';

const App = () => (
    <div>
        <Modal className="modal"/>
        <Route path="/" component={NavBarContainer}/>
        <Route path="/" component={ListingIndexContainer}/>
    </div>
);

export default App;