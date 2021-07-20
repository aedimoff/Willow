import { connect } from "react-redux";
import Home from "./home";
import {
  requestListings,
  setSelectedListingId,
} from "../../actions/listing_actions";
import { requestSaves } from "../../actions/save_actions";
import { openModal } from "../../actions/modal_actions";
import { createSave, deleteSave } from "../../actions/save_actions";
import { updateFilter } from "../../actions/filter_actions";

const mapStateToProps = (state) => ({
  listings: Object.values(state.entities.listings),
  userId: state.session.id,
  saves: Object.values(state.entities.saves),
  position: state.ui.position,
});

const mapDispatchToProps = (dispatch) => ({
  requestListings: (filters) => dispatch(requestListings(filters)),
  requestSaves: () => dispatch(requestSaves()),
  setSelectedListingId: (listingId) => dispatch(setSelectedListingId(listingId)),
  openModal: (modal, params) => dispatch(openModal(modal, params)),
  createSave: (userId, listing) => dispatch(createSave(userId, listing)),
  deleteSave: (listingId) => dispatch(deleteSave(listingId)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
