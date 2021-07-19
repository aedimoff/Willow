import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import listingIdReducer from "./listing_id_reducer";
import filterReducer from "./filter_reducer";
import searchReducer from "./search_reducer"

export default combineReducers({
  modal: modalReducer,
  listingId: listingIdReducer,
  filters: filterReducer,
  position: searchReducer,
});
