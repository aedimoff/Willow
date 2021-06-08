import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

class ListingIndexItem extends React.Component {
    formatStatus(status) {
        if (this.props.listing.status === 'for_sale') {
            return 'for sale'
        } else if (this.props.listing.status === 'pending') {
            return '- sale pending'
        } else {
            return '- SOLD'
        }
    }

    formatType(name) {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    formatPrice(price) {
        return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    
    render() {
        const { listing } = this.props;
        return (
            <li className="listing-index-item"> 
                <img className="image" src={listing.imageUrls && listing.imageUrls[0]}/>
                <article className="listing-card">
                    <h2 className="card-header">{this.formatPrice(listing.price)}</h2>
                    <div className="card-body">
                        {listing.beds} bds {listing.baths} ba - {this.formatType(listing.propertyType)} {this.formatStatus(listing.status)}
                    </div>
                    <div className="card-footer">
                        {listing.address}, {listing.city}, {listing.state}, {listing.zipcode}
                    </div>
                    <div className="save-action">
                        <AiOutlineHeart />
                    </div>
                </article>
                {/* <Link to={`api/listings/${listing.id}`}>{listing.address}</Link> */}
            </li>
        )
    }
}

export default ListingIndexItem;


