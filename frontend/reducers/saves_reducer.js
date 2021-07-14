import { 
    RECEIVE_ALL_SAVES,
    CREATE_SAVE,
    REMOVE_SAVE 
} from '../actions/save_actions';



const savesReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_SAVES:
            return Object.assign({}, state, action.saves);
        case CREATE_SAVE:
            return Object.assign({}, state, {[action.listingId]: action.listingId});
        case REMOVE_SAVE:
            let newState = Object.assign({}, state);
            delete newState[action.listingId]
            return newState;
        default:
            return state;
    }
}

export default savesReducer;
