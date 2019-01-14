import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import rootReducer from "./root-reducer";

const middleware = applyMiddleware(
    thunkMiddleware);

export default function configureStore(initialState) {
  return createStore(rootReducer,
    initialState,
    composeWithDevTools(middleware));
}
