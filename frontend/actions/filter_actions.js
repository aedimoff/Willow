import { requestListings } from './listing_actions';
export const UPDATE_FILTER = "UPDATE_FILTER"
export const SET_POSITION = "SET_POSITION";

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter,
    value
});

export const setPosition = (position) => ({
  type: SET_POSITION,
  position
});

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return requestListings(getState().ui.filters)(dispatch)
};