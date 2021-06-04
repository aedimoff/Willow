import React from 'react';
import { Link } from 'react-router-dom';

class ListingIndexItem extends React.Component {
    render() {
        const { listing } = this.props;
        return (
            <li className="listing-index-item">
                <Link to={`api/listings/${listing.id}`}>{listing.address}</Link>
                
                <img src={listing.imageUrls[0]}/>

            </li>
        )
    }
}

export default ListingIndexItem;

