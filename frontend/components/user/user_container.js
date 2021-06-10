import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import User from './user';

const mapStateToProps = state => ({
    userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, params) => dispatch(openModal(modal, params))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);