import assignToEmpty from '../utils/assign';
import * as AppConstants from '../constants/AppConstants';

// Initial state
const initialState = {};

function clone(state) {
  return assignToEmpty(state, {});
}

// Receives a previous state and an action. Returns the new state as a result of the action.
function homeReducer(state = initialState, action) {
  Object.freeze(state); // Don't mutate state directly, always use assign()!
  const handler = {
    [AppConstants.SIGNUP_BUTTON_HANDLER]: () => {

      //return assignToEmpty(state, {
      //  ownerName: action.name
      //});
    },
  };
  let newState = clone(state);
  return newState;
}

export default homeReducer;
