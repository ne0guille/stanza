import { FETCH_EVENTS_INIT, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE} from "./types";
import mockedEvents from './mockedEvents';

const fetchEventInit = payload => ({
  type: FETCH_EVENTS_INIT,
});

const fetchEventSuccess = payload => ({
  type: FETCH_EVENTS_SUCCESS,
  payload
});

const fetchEventFailure = error => ({
  type: FETCH_EVENTS_FAILURE,
  error
});


export const fetchEvents = () => dispatch => {
  dispatch(fetchEventInit());

  return new Promise(((resolve, reject) => resolve(mockedEvents)))
    .then(response => dispatch(fetchEventSuccess(response)))
    .catch(error => dispatch(fetchEventFailure(error)));
}