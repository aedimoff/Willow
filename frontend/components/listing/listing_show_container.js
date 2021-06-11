import { connect } from 'react-redux';
import ListingShow from './listing_show';
import { requestListing } from '../../actions/listing_actions';
import { createSave, deleteSave } from '../../actions/save_actions';


const mapStateToProps = (state) => {
    return {
        listing: state.entities.listings[state.ui.listingId.selectedListingId],
        saves: Object.values(state.entities.saves),
        userId: state.session.id
    }
};

const mapDispatchToProps = dispatch => ({
    requestListing: listingId => (dispatch(requestListing(listingId))),
    createSave: save => dispatch(createSave(save)),
    deleteSave: saveId => dispatch(deleteSave(saveId)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingShow);