import React from "react";
import ListingIndexItem from "../listing/listing_index_item";
import Spinner from "../spinner/spinner";
import { AiOutlineHeart } from "react-icons/ai";

class SavesIndex extends React.Component {
  componentDidMount() {
    this.props.requestListings();
    this.props.requestSaves();
  }

  display() {
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

    const savedListings = Object.values(saves).map(
      (item) => listings[item.listingId]
    );
    
    if (savedListings.length) {
      return savedListings[savedListings.length - 1] ? (
        <ul className="saves-index-container" id="saves-index-container">
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
    } else {
      return (
        <div className="saves-grid-container">
          <img className="saves-houses-img" src={window.houses} />
          <div className="saves-page-text">
            <a className="accreditation-link" href="http://www.freepik.com">
              Designed by rawpixel.com / Freepik
            </a>
            <h2 className="saves-index-greeting">
              Save homes for save keeping
            </h2>
            <p className="saves-index-directions">
              Whenever you find homes you like, select the{" "}
              <AiOutlineHeart id="instruction-heart" /> icon to save them
            </p>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div className="saves-grid-container">{this.display()}</div>;
  }
}

export default SavesIndex;
