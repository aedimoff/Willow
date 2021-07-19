import React from "react";
import ListingsIndex from "../listing/listings_index";
import ListingMap from "../map/listing_map";
import SearchContainer from "../search/search_container";
import Search from "../search/search";


const Home = (props) => {
  const {
    listings,
    openModal,
    setSelectedListingId,
    requestListings,
    requestSaves,
    createSave,
    deleteSave,
    updateFilter,
    userId,
    saveId,
    saves,
  } = props;

  return (
    <div className="home-page">

      <ListingMap
        listings={listings}
        openModal={openModal}
        setSelectedListingId={setSelectedListingId}
        updateFilter={updateFilter}
      />
      <ListingsIndex
        listings={listings}
        openModal={openModal}
        setSelectedListingId={setSelectedListingId}
        requestListings={requestListings}
        updateFilter={updateFilter}
        requestSaves={requestSaves}
        createSave={createSave}
        deleteSave={deleteSave}
        userId={userId}
        saveId={saveId}
        saves={saves}
      />
      <SearchContainer />
    </div>
  );
};

export default Home;
