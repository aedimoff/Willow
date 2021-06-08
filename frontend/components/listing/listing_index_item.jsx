import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link, withRouter } from "react-router";

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

    formatDetails(beds, baths, propertyType) {
        return `${beds} bds ${baths} ba - ${this.formatType(propertyType)} ${this.formatStatus(status)}`
    }
    
    formatAddress(address, city, state, zipcode) {
        return `${address}, ${city}, ${state}, ${zipcode}`
    }

    setListingAndOpenModal(listingId) {
        const { openModal, setSelectedListingId } = this.props;
        setSelectedListingId(listingId)
        openModal('Listing Show', { size: "large" });

    }

    // handleClick(listingId) {
    //     this.props.history.push(`/listings/${listingId}`)
    // }
    
    render() {
        const { listing } = this.props;

        console.log("listingIndexItemListing", listing)

        return (

            <li className="listing-index-item" onClick={() => this.setListingAndOpenModal(listing.id)}>
                <img className="image" src={listing.imageUrls && listing.imageUrls[0]}/>
                <article className="listing-card">
                    <h2 className="card-header">{this.formatPrice(listing.price)}</h2>
                    <div className="card-body">
                        {this.formatDetails(listing.beds, listing.baths, listing.propertyType)}
                    </div>
                    <div className="card-footer">
                        {this.formatAddress(listing.address, listing.city, listing.state, listing.zipcode)}
                    </div>
                    <div className="save-action">
                        <AiOutlineHeart />
                    </div>
                </article>
            </li>

        )
    }
}

export default ListingIndexItem;


