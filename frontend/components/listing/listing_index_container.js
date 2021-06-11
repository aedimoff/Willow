import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { requestListings, setSelectedListingId } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings),
    userId: state.session.id,
    saves: Object.values(state.entities.saves),
    saveId: state.entities.saves.save
})

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings()),
    setSelectedListingId: listingId => dispatch(setSelectedListingId(listingId)),
    openModal: (modal, params) => dispatch(openModal(modal, params)),
    createSave: (userId, listingId) => dispatch(createSave(userId, listingId)),
    deleteSave: saveId => dispatch(deleteSave(saveId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);