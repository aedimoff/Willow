import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
import { closeModal } from '../../actions/modal_actions'
import ListingCreate from './listing_create';

const mapStateToProps = state => ({
    sellerId: state.session.id,
    listing: {
        description: "", 
        price: "", 
        property_type: "", 
        images: [], 
        address: "",
        zipcode: "",
        city: "",
        state: "",
        status: "for_sale",
        beds: "",
        baths: "",
        lat: 0,
        lng: 0,
        seller_id: state.session.id,
    }
});


const mapDispatchToProps = dispatch => ({
    createListing: listing => (dispatch(createListing(listing))),
    closeModal: () => (dispatch(closeModal()))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingCreate);

