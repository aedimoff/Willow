import { SET_POSITION } from "../actions/filter_actions";

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case SET_POSITION:
      return Object.assign({}, state, action.position);
    default:
      return state;
  }
};

export default searchReducer;
