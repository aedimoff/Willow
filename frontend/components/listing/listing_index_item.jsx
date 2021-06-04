import React from 'react';
import { Link } from 'react-router-dom';

class ListingIndexItem extends React.Component {
    render() {
        const { listing } = this.props;
        return (
            <li className="listing-index-item">
                <Link to={`api/listings/${listing.id}`}>{listing.address}</Link>
            </li>
        )
    }
}

export default ListingIndexItem;

