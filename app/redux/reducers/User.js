import * as types from '../types';
import { placeTypes } from '../../utils/Consts'

const initialState = {
  name: 'test',
  placeTypes: placeTypes.slice(0, 11),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.USER_NAME:
      return {
        ...state,
        status: action.type,
        name: action.payload,
      };
    case types.USER_SELECTED_PLACE_TYPES:
      return {
        ...state,
        status: action.type,
        placeTypes: action.payload,
      };
    default:
      return state;
  }
};
