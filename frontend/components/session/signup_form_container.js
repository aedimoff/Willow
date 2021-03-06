import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
    errors: Object.values(state.errors),
    formType: 'Sign Up',
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  openModal: () => dispatch(openModal('Log In')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);


