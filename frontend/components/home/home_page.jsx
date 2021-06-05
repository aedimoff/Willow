import React from 'react';
import ListingIndexContainer from '../listing/listing_index_container';
import ListingMap from '../map/listing_map';


const HomePage = () => {
        return (
            <div className="home-page">
                <ListingMap />
                <ListingIndexContainer />
            </div>
        )
};


export default HomePage;
