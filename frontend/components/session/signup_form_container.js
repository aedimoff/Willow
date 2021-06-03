import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import { openModal, closeModal } from '../../actions/modal_actions';


const mapStateToProps = ({ errors }) => ({
    errors: errors.session,
    formType: 'Sign Up',
    // navLink: <Link to="/login">Log In!</Link>,
});

const mapDispatchToProps = dispatch => ({
  processForm: user => dispatch(signup(user)),
  otherForm: (
    <button onClick={() => dispatch(openModal('Log In'))}>
      Log In
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps,mapDispatchToProps)(SessionForm);


