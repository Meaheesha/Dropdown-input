import * as actionTypes from "../actions/actionTypes";

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.APPLY_RESULT:
      return [...state, Object.assign({}, action.Location)];
    default:
      return state;
  }
};
