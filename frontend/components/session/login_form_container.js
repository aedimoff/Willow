import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
    errors: state.errors,
    formType: 'Log In',
    // navLink: <Link to="/signup">Create an Account</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(login(user)),
  openModal: something => dispatch(openModal('Sign Up')),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
