import React from 'react';

class ListingShow extends React.Component {
    formatPrice(price) {
        return '$' + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    formatDetails(beds, baths, propertyType) {
        return `${beds} bds ${baths} ba - ${this.formatType(propertyType)} ${this.formatStatus(status)}`
    }

    formatAddress(address, city, state, zipcode) {
        return `${address}, ${city}, ${state}, ${zipcode}`
    }

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

    render() {

        const { listing } = this.props;
       
        return(
            <div className="listing-show">            
                <div className="images">
                    <img className="header-image" src={listing.imageUrls.shift()}/>
                    <div className="image-grid">
                        {listing.imageUrls.map(url => (
                            <img className="listing-image" src={url}/>
                        ))}
                    </div>
                </div> 
                <div className="description-container">
                    <h1 className="listing-show-header">Willow</h1>
                    <h2 className="listing-header">{this.formatPrice(listing.price)}</h2>
                    <div className="listing-details">{this.formatDetails(listing.beds, listing.baths, listing.propertyType)}</div>
                    <div className="listing-address">{this.formatAddress(listing.address, listing.city, listing.state, listing.zipcode)}</div>
                    <h2 className="description-header">Overview</h2>
                    <p className="listing-description">{listing.description}</p>
                </div>
            </div>
        )
    }
}



export default ListingShow;





