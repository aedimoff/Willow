
import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../spinner/spinner";
import ListingIndexItem from "../listing/listing_index_item";

class UserListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listings: this.props.listings };
  }
  componentDidMount() {
    this.props.requestUsersListings(this.props.userId);
    this.setState({ listings: this.props.listings });
  }

  display() {
    const {
      openModal,
      setSelectedListingId,
      createSave,
      deleteSave,
      userId,
      saveId,
      saves,
    } = this.props;

    const listings = Object.values(this.props.listings);
    if (listings.length) {
      return listings[listings.length - 1] ? (
        <ul className="user-listing-index-container">
          {listings.map((listing) => (
            <ListingIndexItem
              key={listing.id}
              listing={listing}
              openModal={openModal}
              setSelectedListingId={setSelectedListingId}
              createSave={createSave}
              deleteSave={deleteSave}
              userId={userId}
              saveId={saveId}
              saves={saves}
              modalType={"Edit Listing"}
            />
          ))}
        </ul>
      ) : (
        <div id="my-listings-spinner">
          <Spinner id="my-listings-spinner" />
        </div>
      );
    } else {
      return (
        <Link
          id="listing-crud-button"
          to={`/users/for-sale-by-owner`}
        >
          Click here to list your home on Willow!
        </Link>
      );
    }
  }

  render() {
    return (
      <div className="my-listings-page">
        <img className="sell-page" src={window.sell_page} />
        <div className="user-listing-grid-container">
          <h1 className="user-header">My Listings</h1>
          {this.display()}
        </div>
      </div>
    );
  }
}

export default UserListingIndex;
