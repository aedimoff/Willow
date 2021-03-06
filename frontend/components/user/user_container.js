import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import User from './user';
import { requestListings } from '../../actions/listing_actions'

const mapStateToProps = state => ({
    userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, params) => dispatch(openModal(modal, params)),
    requestListings: () => dispatch(requestListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(User);