import { connect } from 'react-redux';
import SaleForm from './sale';

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
    state: "CA",
    status: "for_sale",
    beds: "",
    baths: "",
    lat: 0,
    lng: 0,
    seller_id: state.session.id,
  },
  formType: "Create Listing",
});

export default connect(mapStateToProps, null)(SaleForm);