import React from "react";
import ListingIndexContainer from "../listing/listing_index_container";
import ListingsIndex from "../listing/listings_index";
import ListingMap from "../map/listing_map";

const Search = ({
  listings,
  openModal,
  setSelectedListingId,
  requestListings,
  requestSaves,
  createSave,
  deleteSave,
  userId,
  saveId,
  saves,
}) => {
  return (
    <div className="home-page">
      <ListingMap listings={listings}/>
      <ListingsIndex 
        listings={listings} 
        openModal={openModal}
        setSelectedListingId={setSelectedListingId}
        requestListings={requestListings}
        requestSaves={requestSaves}
        createSave={createSave}
        deleteSave={deleteSave}
        userId={userId}
        saveId={saveId}
        saves={saves}
      />
    </div>
  );
};

export default Search;
