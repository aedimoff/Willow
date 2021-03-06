import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

class ListingIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
  }
  formatStatus(status) {
    if (this.props.listing.status === "for_sale") {
      return "for sale";
    } else if (this.props.listing.status === "pending") {
      return "- sale pending";
    } else {
      return "- SOLD";
    }
  }

  formatType(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  formatPrice(price) {
    return "$" + price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  formatDetails(beds, baths, propertyType) {
    return `${beds} bds ${baths} ba - ${this.formatType(
      propertyType
    )} ${this.formatStatus(status)}`;
  }

  formatAddress(address, city, state, zipcode) {
    return `${address}, ${city}, ${state}, ${zipcode}`;
  }

  setListingAndOpenModal(listingId, modalType) {
    const { openModal, setSelectedListingId } = this.props;
    setSelectedListingId(listingId);
    openModal(modalType, { size: "large" });
  }

  isSaved(listingId) {
    const { saves } = this.props;
    if (saves.find((el) => el.listingId === listingId)) {
      return true;
    }
  }

  handleClick(action) {
    const { userId, listing, createSave, deleteSave } = this.props;
    if (action === "save") {
      createSave(userId, listing.id);
    } else {
      deleteSave(listing.id);
    }
    this.setState({ saved: !this.state.saved });
  }

  render() {
    const { listing } = this.props;

    return (
      <li className="listing-index-item">
        {
          <div className="save-action">
            {this.isSaved(listing.id) ? (
              <AiFillHeart
                id="heart"
                onClick={() => this.handleClick("remove")}
              />
            ) : (
              <AiOutlineHeart onClick={() => this.handleClick("save")} />
            )}
          </div>
        }
        <div
          className="listing-card"
          onClick={() => this.setListingAndOpenModal(listing.id, this.props.modalType)}
        >
          <img
            className="image"
            src={listing.imageUrls && listing.imageUrls[0]}
          />
          <article className="listing-info-card">
            <h2 className="card-header">{this.formatPrice(listing.price)}</h2>
            <div className="card-body">
              {this.formatDetails(
                listing.beds,
                listing.baths,
                listing.propertyType
              )}
            </div>
            <div className="card-footer">
              {this.formatAddress(
                listing.address,
                listing.city,
                listing.state,
                listing.zipcode
              )}
            </div>
          </article>
        </div>
      </li>
    );
  }
}

export default ListingIndexItem;
