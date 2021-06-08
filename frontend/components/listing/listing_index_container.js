import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { requestListings, setSelectedListingId } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings()),
    setSelectedListingId: listingId => dispatch(setSelectedListingId(listingId)),
    openModal: (modal, params) => dispatch(openModal(modal, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);