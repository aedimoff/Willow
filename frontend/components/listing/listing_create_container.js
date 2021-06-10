import { connect } from 'react-redux';
import ListingCreate from './listing_create';

const mapStateToProps = state => ({
    sellerId: state.session.id,
    listing: {
        description: "", 
        price: "", 
        property_type: "", 
        images: "", 
        address: "",
        zipcode: "",
        city: "",
        state: "",
        status: "for_sale",
        beds: "",
        baths: "",
     
    }
});


const mapDispatchToProps = dispatch => ({
    createListing: listing => (dispatch(createListing(listing)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingCreate);

