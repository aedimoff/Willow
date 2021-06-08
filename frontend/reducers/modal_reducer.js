import { CLOSE_MODAL, OPEN_MODAL } from "../actions/modal_actions";

const modalReducer = (state = null, action) => {
    switch (action.type) {
        case OPEN_MODAL:
           return { type: action.modal, params: action.params }
        case CLOSE_MODAL:
            return null;
        default:
            return state;
    }
};

export default modalReducer;