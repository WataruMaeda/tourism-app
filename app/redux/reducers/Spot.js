import * as types from '../types';

const initialState = {
  spot: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SPOT_DETAILS:
      return {
        ...state,
        status: action.type,
        spot: action.payload,
      };
    case types.SPOT_DETAILS_RESET:
      return initialState;
    default:
      return state;
  }
};
