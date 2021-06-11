import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingReducer from './listing_reducer';
import savesReducer from './saves_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingReducer,
    saves: savesReducer
});

export default entitiesReducer;

