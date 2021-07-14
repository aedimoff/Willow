import { connect } from 'react-redux';
import SavesIndex from './saves_index'
import { openModal } from "../../actions/modal_actions";
import { requestListings, setSelectedListingId } from '../../actions/listing_actions';
import { requestSaves, createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = (state) => ({
  userId: state.session.id,
  saves: Object.values(state.entities.saves),
  listings: state.entities.listings,
});

const mapDispatchToProps = (dispatch) => ({
  requestSaves: () => dispatch(requestSaves()),
  requestListings: () => dispatch(requestListings()),
  setSelectedListingId: (listingId) => dispatch(setSelectedListingId(listingId)),
  openModal: (modal, params) => dispatch(openModal(modal, params)),
  createSave: (save) => dispatch(createSave(save)),
  deleteSave: (saveId) => dispatch(deleteSave(saveId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SavesIndex)
