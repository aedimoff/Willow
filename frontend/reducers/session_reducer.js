import { 
    RECEIVE_CURRENT_USER, 
    LOGOUT_CURRENT_USER, 
    RECEIVE_ERRORS 
} from '../actions/session_actions'

const _nullSession = {
    id: null
};

const SessionReducer = (state= _nullSession, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { [currentUser]: action.user})
        case LOGOUT_CURRENT_USER:
            return _nullSession
        // case RECEIVE_ERRORS:
        //     return
        default:
            return state;
    }
}

export const SessionReducer;