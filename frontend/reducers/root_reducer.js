import SessionReducer from './session_reducer'
import { combineReducers } from 'redux';

/*
Export a `RootReducer` that sets up a `reports` slice of state, which delegates
to the `ReportsReducer`.
*/

const RootReducer = combineReducers({
    session: SessionReducer
})

export default RootReducer;