import { connect } from 'react-redux';
import SaleForm from './sale';
import { createListing } from '../../actions/listing_actions';

const mapStateToProps = (state) => ({
  sellerId: state.session.id,
  listing: {
    description: "asdg asdlkfjas aslkfsa oweinalb woibjoaew boisdlkf wnelsdvjo wekl;alkjcds ",
    price: "500000",
    property_type: "House",
    images: [],
    address: "25 Sharon St",
    zipcode: "94114",
    city: "San Francisco",
    state: "CA",
    status: "for_sale",
    beds: "3",
    baths: "3",
    lat: 41.76838, //default should be 0
    lng: -71.42353,
    seller_id: state.session.id,
  },
  formType: "Create Listing",
});

const mapDispatchToProps = (dispatch) => ({
  createListing: (listing) => dispatch(createListing(listing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);