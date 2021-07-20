import React from "react";
import ListingsIndex from "../listing/listings_index";
import ListingMap from "../map/listing_map";
import SearchContainer from "../search/search_container";


class Home extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {position: this.props.position}
  }
  
  render() {
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
    } = this.props;
    return <div className="home-page">

      <ListingMap
        listings={listings}
        openModal={openModal}
        setSelectedListingId={setSelectedListingId}
        updateFilter={updateFilter}
        position={this.props.position}
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
  }
};

export default Home;
