import React from 'react';
import ListingIndexItem from '../listing/listing_index_item';
import Spinner from '../spinner/spinner'


class SavesIndex extends React.Component {
  componentDidMount() {
    this.props.requestListings();
    this.props.requestSaves();
    console.log("CDM IN SAVESINDEX", this.props)
  }

  render() {
    const {
      listings,
      saves,
      openModal, 
      setSelectedListingId,
      createSave,
      deleteSave,
      userId,
      saveId,
    } = this.props;
    
    const savedListings = Object.values(saves).map((item) =>
      listings[item.listingId]
    );

    const display = savedListings[savedListings.length - 1] ? (
      <ul className="listing-index-container" id="saves-index-container">
        {savedListings.map((listing) => (
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
      <Spinner />
    );

    return <div className="listing-grid-container">
      {display}
    </div>;
  }
  
}

export default SavesIndex;