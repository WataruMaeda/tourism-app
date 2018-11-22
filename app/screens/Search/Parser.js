import { Urls } from '../../utils/Apis'

// MARK: - Modal

class SpotNearby {
  constructor(spot) {
    const {id, place_id, geometry, photos, name, rating, opening_hours } = spot;

    // general
    this.id = id;
    this.time = 8;
    this.title = name;
    this.place_id = place_id;
    this.rate = rating ? rating : 0;

    // coodinate
    if (geometry.location && geometry.location.lat && geometry.location.lng) {
      this.lat = geometry.location.lat;
      this.lng = geometry.location.lng;
    } else {
      this.lat = 0;
      this.lng = 0;
    }

    // image url
    if (photos && photos.length > 0 && photos[0].photo_reference) {
      this.photo_reference = photos[0].photo_reference;
      this.imageURL = `${Urls.photos_s}&photoreference=${photos[0].photo_reference}`;
    }

    // opening hour
    if (opening_hours && opening_hours.open_now) {
      this.open_now = opening_hours.open_now
    } else {
      this.open_now = false;
    }
  }
}

export const parseSpotsNearby = (spots) => {
  let array = [];
  spots.forEach(spot => {
    const {id, place_id, geometry, name } = spot;
    if (id && place_id && geometry && name) {
      array.push(new SpotNearby(spot));
    }
  });
  return array;
}
