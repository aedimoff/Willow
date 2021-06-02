import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (state={}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { id: action.currentUser.id})
        default:
            return state;
    }
}

export default usersReducer;