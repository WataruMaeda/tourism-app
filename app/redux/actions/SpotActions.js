import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setSpotDetails = spot => {
  store.dispatch(storeSpotDetails(spot));
};

export const resetSpotDetails = () => {
  store.dispatch({
    type: types.SPOT_DETAILS_RESET,
  });
};

// MARK - Actions

const storeSpotDetails = spot => {
  return dispatch => {
    dispatch({
      type: types.SPOT_DETAILS,
      payload: spot,
    });
  };
};
