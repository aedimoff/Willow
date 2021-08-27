import { connect } from 'react-redux';
import SaleForm from './sale';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = (state) => ({
  sellerId: state.session.id,
  listing: {
    description: "",
    price: "",
    property_type: "",
    images: [],
    address: "25 Sharon St",
    zipcode: "94114",
    city: "San Francisco",
    state: "",
    status: "for_sale",
    beds: "",
    baths: "",
    lat: 0, //default should be 0
    lng: 0,
    seller_id: state.session.id,
  },
  formType: "Create Listing",
});

const mapDispatchToProps = (dispatch) => ({
  createListing: (listing) => dispatch(createListing(listing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);