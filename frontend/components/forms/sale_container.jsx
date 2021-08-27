import { connect } from 'react-redux';
import SaleForm from './sale';
import { createListing } from '../../actions/listing_actions';
import { receiveErrors} from '../../actions/session_actions';
 
const mapStateToProps = (state) => ({
  listing: {
    description: "",
    price: "",
    property_type: "",
    images: [],
    address: "",
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
  sellerId: state.session.id,
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch) => ({
  createListing: (listing) => dispatch(createListing(listing)),
  receiveErrors: (errors) => dispatch(receiveErrors(errors))
});

export default connect(mapStateToProps, mapDispatchToProps)(SaleForm);