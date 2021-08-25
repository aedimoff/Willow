import { connect } from 'react-redux';
import SaleForm from './sale';

const mapStateToProps = (state) => ({
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
  formType: "Create Listing",
});

export default connect(mapStateToProps, null)(SaleForm);