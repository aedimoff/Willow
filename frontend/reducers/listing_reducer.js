import {
  RECEIVE_ALL_LISTINGS,
  RECIEVE_USERS_LISTINGS,
  RECEIVE_LISTING,
  REMOVE_LISTING,
} from "../actions/listing_actions";

const listingReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_LISTINGS:
      return { ...action.listings };
    case RECEIVE_LISTING:
      return Object.assign({}, state, {
        [action.listing.id]: action.listing,
      });
    case REMOVE_LISTING:
      let newState = Object.assign({}, state);
      delete newState[action.listingId];
      return newState;
    default:
      return state;
  }
};

export default listingReducer;
