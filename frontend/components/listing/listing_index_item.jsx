import React from 'react';
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';

// class ImageCard extends React.Component {
//     render() {
//         const { imageUrl, header, details, footer }

//         return (
//             <article className="image-card">
//                 <img className="image" src={listing.imageUrls[0]}/>

//                 <div className="card-info">
//                     <div className="card-heading">
//                         { heading }
//                     </div>
//                     <div>
//                         { footer }
//                     </div>
//                 </div>
//                 <div className="card-save-action" onClick={() => this.action()}></div>
//             </article>
//         )
//     }
// }

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
                <img className="image" src={listing.imageUrls[0]}/>
                <article className="listing-card">
                    <h2 className="card-header">{this.formatPrice(listing.price)}</h2>
                    <div className="card-body">
                        {listing.beds} bds {listing.baths} ba - {this.formatType(listing.propertyType)} {this.formatStatus(listing.status)}
                    </div>
                    <div className="card-footer">
                        {listing.address}, {listing.city}, {listing.state}, {listing.zipcode}
                    </div>
                    <div className="save-action">
                        <i className="fa fa-heart fa6x"></i>
                    </div>
                </article>
                {/* <Link to={`api/listings/${listing.id}`}>{listing.address}</Link> */}
            </li>
        )
    }
}

export default ListingIndexItem;


