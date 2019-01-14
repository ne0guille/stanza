import { FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from '../actions/types';

const initialState = {
  data: [],
  error: undefined,
  //byId: {},
  // allIds: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EVENTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: undefined
      };
    case FETCH_EVENTS_FAILURE:
      return {
        ...state,
        error: action.error
      };
    default:
      return state;
  }
}