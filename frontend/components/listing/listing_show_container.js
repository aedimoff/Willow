import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';


const mapStateToProps = (state) => {
    // console.log("state in mstp", state)
    // console.log("ownProps in mstp", ownProps)
    return {listing: state.entities.listings.listing }
};

const mapDispatchToProps = dispatch => ({
    requestListing: listingId => (dispatch(requestListing(listingId)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);