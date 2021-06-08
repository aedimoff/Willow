import { combineReducers } from 'redux';
import modalReducer from './modal_reducer';
import listingIdReducer from './listing_id_reducer';

export default combineReducers({
    modal: modalReducer,
    listingId: listingIdReducer
});