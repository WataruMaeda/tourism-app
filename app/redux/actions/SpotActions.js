import axios from 'axios';
import * as types from '../types';
import store from '../store';
import { Urls } from '../../utils/Apis';

// MARK - Setter

export const setSpotDetails = placeId => {
  resetSpotDetails();
  const url = `${Urls.placeDetails}&placeid=${placeId}`;
  console.log('[##] spot details url is', url)
  axios.get(url).then(res => {
    const { data } = res;
    if (data && data.result) {
      console.log('[##] spot details', data.result)
      store.dispatch(storeSpotDetails(data.result));
    }
  }).catch((e) => {
    alert(e);
  })
};

const resetSpotDetails = () => {
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
