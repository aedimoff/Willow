import { connect } from 'react-redux';
import Search from "./search";
import { requestListings, setSelectedListingId } from '../../actions/listing_actions';
import { requestSaves } from '../../actions/save_actions'
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings),
    userId: state.session.id,
    saves: Object.values(state.entities.saves),
})

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings()),
    requestSaves: () => dispatch(requestSaves()),
    setSelectedListingId: listingId => dispatch(setSelectedListingId(listingId)),
    openModal: (modal, params) => dispatch(openModal(modal, params)),
    createSave: (userId, listing) => dispatch(createSave(userId, listing)),
    deleteSave: listingId => dispatch(deleteSave(listingId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);