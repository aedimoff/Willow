import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: Object.values(state.errors),
    formType: 'Log In',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  openModal: () => dispatch(openModal('Sign Up')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
