import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { setSelectedListingId } from '../../actions/listing_actions';
import Markers from '../../util/markers';

const mapDispatchToProps = dispatch => ({
  setSelectedListingId: (listingId) => dispatch(setSelectedListingId(listingId)),
  openModal: (modal, params) => dispatch(openModal(modal, params)),
})

export default connect(null, mapDispatchToProps)(Markers)