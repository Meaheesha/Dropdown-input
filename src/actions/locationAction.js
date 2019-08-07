import * as actionTypes from "./actionTypes";

export const applyResult = Location => {
  return {
    type: actionTypes.APPLY_RESULT,
    Location
  };
};
