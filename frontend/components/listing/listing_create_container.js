import { connect } from 'react-redux';
import { createListing, deleteListing } from '../../actions/listing_actions';
import { closeModal } from '../../actions/modal_actions'
import ListingForm from './listing_form';

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
    },
    formType: "Create Listing"
});


const mapDispatchToProps = (dispatch) => ({
  action: (listing) => dispatch(createListing(listing)),
  closeModal: () => dispatch(closeModal()),
  deleteListing: (listingId) => dispatch(deleteListing(listingId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingForm);

