import { connect } from 'react-redux';
import { createListing } from '../../actions/listing_actions';
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
        lat: 0,
        lng: 0,
        seller_id: state.session.id,
        images:["https://photos.zillowstatic.com/fp/7c8aeceb656e1e0ef3e5d561eb5aa7c5-cc_ft_1536.jpg", "https://photos.zillowstatic.com/fp/7c8f725e160ef9f8d9aff811c021f4df-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/6f1e864b93f43b80af98928945aeaf60-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/3a96a1016cd8dfc56362ac448b18366b-cc_ft_768.jpg", "https://photos.zillowstatic.com/fp/669e9a91c2f78e2b26856f90860491b9-cc_ft_768.jpg"],
    }
});


const mapDispatchToProps = dispatch => ({
    createListing: listing => (dispatch(createListing(listing)))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingCreate);

