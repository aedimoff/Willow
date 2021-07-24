import React from "react";
import Spinner from "../spinner/spinner";
import ListingIndexItem from "../listing/listing_index_item";

class UserListingIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listings: this.props.listings}
  }
  componentDidMount() {
    this.props.requestUsersListings(this.props.userId);
    this.setState({listings: this.props.listings})
  }

  handleListingClick() {
    this.props.openModal("Create Listing", { size: "large" });
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

    const display = listings[listings.length - 1] ? (
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

    return (
      <div className="user-listing-grid-container">
        <h1 className="user-header">My Listings</h1>
        {display}
      </div>
    );
  }
}

export default UserListingIndex;
