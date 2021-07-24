import React from "react";
import ListingIndexItem from "../listing/listing_index_item";
import Spinner from "../spinner/spinner";
import { AiOutlineHeart } from "react-icons/ai";

class SavesIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {listings: this.props.listings}
  }
  componentDidMount() {
    this.props.requestSaves()
    this.props.requestSavedListings();
    this.setState({ listings: this.props.listings });
  }

  display() {
    const {
      listings,
      openModal,
      setSelectedListingId,
      createSave,
      deleteSave,
      userId,
      saves,
      saveId,
    } = this.props;


    const listingIds = Object.keys(listings)
    if (listingIds.length) {
      return (
        <ul className="saves-index-container" id="saves-index-container">
          {listingIds.map((listingId, idx) => (
            <ListingIndexItem
              key={idx}
              listing={listings[listingId]}
              openModal={openModal}
              setSelectedListingId={setSelectedListingId}
              createSave={createSave}
              deleteSave={deleteSave}
              userId={userId}
              saveId={saveId}
              saves={saves}
              modalType={"Listing Show"}
            />
          ))}
        </ul>
      )
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
