import { connect } from "react-redux";
import UserListingsIndex from "./user_listings_index";
import { requestUsersListings, setSelectedListingId } from "../../actions/listing_actions";
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';


const mapStateToProps = (state) => ({
  userId: state.session.id,
  listings: state.entities.listings,
  saves: Object.values(state.entities.saves),
});

const mapDispatchToProps = (dispatch) => ({
  openModal: (modal, params) => dispatch(openModal(modal, params)),
  requestUsersListings: (userId) => dispatch(requestUsersListings(userId)),
  createSave: (save) => dispatch(createSave(save)),
  deleteSave: (saveId) => dispatch(deleteSave(saveId)),
  setSelectedListingId: (listingId) => dispatch(setSelectedListingId(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserListingsIndex);
