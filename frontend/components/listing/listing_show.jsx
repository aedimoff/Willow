import React from 'react';
import { MdClose} from 'react-icons/md'
import logo from "../../../app/assets/images/logo.png";

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
        const { listing, closeModal } = this.props;
       
        return (
          <div className="listing-show">
            <div className="close-x" onClick={closeModal}>
              <MdClose id="close-x" size={40} />
            </div>
            <div className="images">
              <img className="header-image" src={listing.imageUrls.shift()} />
              <div className="image-grid">
                {listing.imageUrls.map((url, i) => (
                  <img key={i} className="listing-image" src={url} />
                ))}
              </div>
            </div>
            <div className="description-container">
              <div className="listing-show-logo-container">
              <img className="listing-show-logo" src={window.logo} alt="willow logo" />

              </div>

              <h2 className="listing-price">
                {this.formatPrice(listing.price)}
              </h2>
              <div className="listing-details">
                {this.formatDetails(
                  listing.beds,
                  listing.baths,
                  listing.propertyType
                )}
              </div>
              <div className="listing-address">
                {this.formatAddress(
                  listing.address,
                  listing.city,
                  listing.state,
                  listing.zipcode
                )}
              </div>
              <h2 className="description-header">Overview</h2>
              <div className="days-and-saves">
                <div className="days-count">Days on Willow: 14 days</div>
                <div className="saves-count">Saves: 145</div>
              </div>
              {/* <p className="listing-description">{listing.description}</p> */}
              <p>
                Beautiful home on corner lot with mountain views! Enjoy an open
                floor plan and lots of natural light. The living room offers an
                inviting fireplace and flows to the gourmet kitchen. Kitchen
                features include a large center island, elegant cabinetry, and
                stainless steel appliances. The primary bedroom offers carpet
                flooring, a walk-in closet, dual sinks in the primary bathroom,
                a soaking tub, and a walk-in shower. Additional property
                highlights include the inside laundry room, 3 car tandem garage,
                and no HOA. Convenient to area schools, shopping plazas, and
                major freeways!
              </p>
              <h2 className="description-header">Facts and Features</h2>
              <img className="listing-features" src={window.listing_features} />
            </div>
          </div>
        );
    }
}



export default ListingShow;





