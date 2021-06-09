import { SET_SELECTED_LISTING_ID} from '../actions/listing_actions';

const listingIdReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case SET_SELECTED_LISTING_ID:
            return Object.assign({}, state, {selectedListingId: action.selectedListingId});

        default:
            return state;
    }
};

export default listingIdReducer;