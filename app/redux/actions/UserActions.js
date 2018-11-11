import * as types from '../types';
import store from '../store';

// MARK - Setter

export const setUserName = name => {
  store.dispatch(storeUserName(name));
};

export const setSelectedPlaceTypes = types => {
  store.dispatch(storeSelectedPlaceTypes(types));
};

// MARK - Getter

export const getUserName = () => {
  const state = store.getState();
  return state.user.name;
};

export const getSelectedPlaceTypes = () => {
  const state = store.getState();
  return state.user.placeTypes;
};

// MARK - Actions

const storeUserName = name => {
  return dispatch => {
    dispatch({
      type: types.USER_NAME,
      payload: name,
    });
  };
};

const storeSelectedPlaceTypes = types => {
  return dispatch => {
    dispatch({
      type: types.USER_SELECTED_PLACE_TYPES,
      payload: types,
    });
  };
};