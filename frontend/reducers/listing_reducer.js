import { 
    RECEIVE_ALL_LISTINGS,
    RECEIVE_LISTING,
    REMOVE_LISTING
} from '../actions/listing_actions';

const listingReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            return Object.assign({}, state, action.listings);
        case RECEIVE_LISTING:
            return Object.assign({}, action, {[action.listing.id]: action.listing});
        case REMOVE_LISTING:
            let newState = Object.assign({}, state);
            delete newState[action.listing.id]
            return newState;
        default:
            return state;
    }
};

export default listingReducer;