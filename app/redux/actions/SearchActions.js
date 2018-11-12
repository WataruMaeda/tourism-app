import * as types from '../types';
import store from '../store';
import axios from 'axios';
import { Urls } from '../../utils/Apis';
import { parseSpotsNearby } from '../../utils/Parser';

// MARK - Setter

export const setNearbySpots = (coodinate, placeType) => {
  const url = `${Urls.nearby}&type=${placeType}&location=${coodinate.lat},${coodinate.lng}`;
  axios.get(url).then(res => {
    const { data } = res;
    if (data && data.results) {
      console.log('[#] get nearby results', data.results);
      const parsedData = parseSpotsNearby(data.results)
      console.log('[#] parsed spots', parsedData);
      store.dispatch(storeSpotsNearby(parsedData))
    }
  }).catch((e) => {
    alert(e);
  })
};

// MARK - Getter

export const getUserName = () => {
  const state = store.getState();
  return state.user.name;
};

// MARK - Actions

const storeSpotsNearby = spots => {
  return dispatch => {
    dispatch({
      type: types.SEARCH_NEARBY,
      payload: spots,
    });
  };
};
