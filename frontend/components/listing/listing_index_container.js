import { connect } from 'react-redux';
import ListingsIndex from './listings_index'
import { requestListings, requestListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    listings: Object.values(state.entities.listings)
})

const mapDispatchToProps = dispatch => ({
    requestListings: () => dispatch(requestListings()),
    requestListing: listingId => dispatch(requestListing(listingId)),
    openModal: (modal, params) => dispatch(openModal(modal, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);