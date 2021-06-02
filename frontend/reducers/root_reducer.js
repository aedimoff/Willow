import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';


/*
Export a `RootReducer` that sets up a `reports` slice of state, which delegates
to the `ReportsReducer`.
*/

const RootReducer = combineReducers({
    session: sessionReducer,
    entities: entitiesReducer,
    errors: errorsReducer,
})

export default RootReducer;