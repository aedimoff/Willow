import React from 'react';
import { connect } from 'react-redux';
import SignupFormContainer from '../../components/session/signup_form_container';
import LoginFormContainer from '../../components/session/login_form_container';
import ListingShowContainer from '../listing/listing_show_container';
import ListingCreateContainer from '../listing/listing_create_container';
import { Buy, Sell, Rent }from '../home/options';
import { closeModal } from '../../actions/modal_actions';

const modalSize = size => {
    return size || 'medium'
}

const Modal = ({ modal, closeModal }) => {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.type) {
        case 'Log In':
            component = <LoginFormContainer />;
            break;
        case 'Sign Up':
            component = <SignupFormContainer />;
            break;
        case 'Listing Show':
            component = <ListingShowContainer listing={modal.params.listing}/>;
            break;
        case 'Create Listing':
            component = <ListingCreateContainer />
            break;
        case 'Buy':
            component = <Buy/>;
            break;
        case 'Sell':
            component = <Sell/>;
            break;
        case 'Rent':
            component = <Rent/>;
        default:
            break;
    }

    return(
        <div className="modal-background" onClick={closeModal}>
            <div className={`modal ${modalSize(modal.params.size)}-modal`} onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    )
}

 
const mapStateToProps = state => ({
    modal: state.ui.modal,
});

const mapDisatchToProps = dispatch => ({
    closeModal: () => (dispatch(closeModal()))
});

export default connect(mapStateToProps, mapDisatchToProps)(Modal);