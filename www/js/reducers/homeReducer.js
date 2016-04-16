import assignToEmpty from '../utils/assign';

const initialState = {};

function clone(state) {
  return assignToEmpty(state, {});
}

function homeReducer(state = initialState, action) {
  let newState = clone(state);
  return newState;
}

export default homeReducer;
