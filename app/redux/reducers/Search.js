import * as types from '../types';

const initialState = {
  spotsNearby: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCH_NEARBY:
      return {
        ...state,
        status: types.SEARCH_NEARBY,
        spotsNearby: action.payload,
      };
    default:
      return state;
  }
};
