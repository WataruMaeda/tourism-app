import axios from 'axios';
import { Urls } from '../../utils/Apis';
import { parseSpots } from '../../utils/Parser'

// MARK - Setter

export const getSpotDetails = async placeId => {
  // start fetching place details
  const url = `${Urls.placeDetails}&placeid=${placeId}`;
  try {
    const res = await axios.get(url)
    const { data } = res;
    if (data && data.result) {
      console.log('[##] spot details', data.result)
      return parseSpots(data.result)
    }
    return Promise.reject(res)
  } catch(e) {
    return Promise.reject(e)
  }
}
