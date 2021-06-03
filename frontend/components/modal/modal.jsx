import React from 'react';
import { connect } from 'react-redux';
import SignupFormContainer from '../../components/session/signup_form_container';
import LoginFormContainer from '../../components/session/login_form_container';
import { closeModal } from '../../actions/modal_actions';

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'Log In':
            component = <LoginFormContainer />;
            break;
        case 'Sign Up':
            component = <SignupFormContainer />;
            break;
        default:
            break;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
            { component }
        </div>
        </div>
    )
}


const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDisatchToProps = dispatch => ({
    closeModal: () => (dispatch(closeModal()))
});

export default connect(mapStateToProps, mapDisatchToProps)(Modal);