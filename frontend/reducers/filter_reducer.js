import { UPDATE_FILTER } from '../actions/filter_actions';

const filterReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case UPDATE_FILTER:
      return Object.assign({}, state, {[action.filter]: action.value});
    default:
      return state;
  }
};

export default filterReducer;
