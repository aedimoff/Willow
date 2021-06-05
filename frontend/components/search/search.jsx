import React from 'react';
import ListingMap from '../map/listing_map';
import ListingIndex from '../listing/listings_index';

const Search = ({ listings }) => (
    <div>
        {/* <ListingMap listings={listings} /> */}
        <ListingIndex listings={listings} />
    </div>
);

export default Search;
