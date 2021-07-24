import {
  RECEIVE_ALL_SAVES,
  CREATE_SAVE,
  REMOVE_SAVE,
} from "../actions/save_actions";

const savesReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_SAVES:
      return Object.assign([], state, action.saves);
    case CREATE_SAVE:
      const existingSaves = Object.assign([], state, action.saves);

      existingSaves.push({
        listingId: action.listingId,
        userId: action.userId,
      });
      return existingSaves;
    case REMOVE_SAVE:
      let saves = Object.assign([], state);
      let newState = saves.filter(
        (save) => save.listingId !== action.listingId
      );
      return newState;
    default:
      return state;
  }
};

export default savesReducer;
