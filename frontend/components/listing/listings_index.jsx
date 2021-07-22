import React from "react";
import ListingIndexItem from "./listing_index_item";
import Spinner from "../spinner/spinner";

class ListingsIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listings: this.props.listings}
  }
  componentDidMount() {
    this.props.requestSaves();
  }

  componentDidUpdate() {
    this.setState = this.props.listings
  }

  render() {
    const {
      listings,
      openModal,
      setSelectedListingId,
      createSave,
      deleteSave,
      userId,
      saveId,
      saves,
    } = this.props;
    
    const display = listings[listings.length - 1] ? (
      <ul className="listing-index-container">
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
          />
        ))}
      </ul>
    ) : (
      <Spinner id="index-spinner"/>
    );

    return (
      <div className="listing-grid-container">
        {display}
        {/* <h1 className="listing-header">Real Estate & Homes for Sale</h1> */}
      </div>
    );
  }
}

export default ListingsIndex;
