import React from "react";
import Spinner from "../spinner/spinner";
import ListingIndexItem from "../listing/listing_index_item";

class UserListingIndex extends React.Component {
  componentDidMount() {
    this.props.requestUsersListings(this.props.userId);
  }

  handleListingClick() {
    console.log("listing clicked")
  }

  render() {
    const listings = Object.values(this.props.listings);
    const {
      openModal,
      setSelectedListingId,
      createSave,
      deleteSave,
      userId,
      saveId,
      saves,
    } = this.props;

    console.log("props", this.props);

    const display = listings[listings.length - 1] ? (
      <ul
        className="user-listing-index-container"
      >
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
            handleListingClick={this.handleListingClick}
          />
        ))}
      </ul>
    ) : (
      <Spinner />
    );

    return (
      <div className="user-listing-grid-container">
        <h1 className="user-header">My Listings</h1>
        {display}
      </div>
    );
  }
}

export default UserListingIndex;
