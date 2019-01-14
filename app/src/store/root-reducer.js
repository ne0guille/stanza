import { combineReducers } from "redux";

import eventsReducer from "../screens/Events/reducers/events";

const rootReducer = combineReducers({events: eventsReducer});

export default rootReducer;
