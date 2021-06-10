import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';


const mapStateToProps = (state) => {
    return {
        listing: state.entities.listings[state.ui.listingId.selectedListingId] 
    }
};

const mapDispatchToProps = dispatch => ({
    requestListing: listingId => (dispatch(requestListing(listingId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);