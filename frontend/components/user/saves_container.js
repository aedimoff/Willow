import { connect } from "react-redux";
import SavesIndex from "./saves_index";
import { openModal } from "../../actions/modal_actions";
import {
  requestSavedListings,
  requestListings,
  setSelectedListingId,
} from "../../actions/listing_actions";
import {
  requestSaves,
  createSave,
  deleteSave,
} from "../../actions/save_actions";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
  saves: Object.values(state.entities.saves),
  listings: state.entities.listings,
  userId: state.session.id,
});

const mapDispatchToProps = (dispatch) => ({
  requestSaves: () => dispatch(requestSaves()),
  requestSavedListings: () => dispatch(requestSavedListings()),
  //for ListingIndexItem props
  setSelectedListingId: (listingId) =>
    dispatch(setSelectedListingId(listingId)),
  openModal: (modal, params) => dispatch(openModal(modal, params)),
  createSave: (save) => dispatch(createSave(save)),
  deleteSave: (saveId) => dispatch(deleteSave(saveId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavesIndex);
