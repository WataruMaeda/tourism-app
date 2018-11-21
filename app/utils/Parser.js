import { Urls } from '../utils/Apis'

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

class Spot {
  constructor(spot) {
    const {
      formatted_address,
      formatted_phone_number,
      geometry,
      id,
      name,
      opening_hours,
      weekday_text,
      photos,
      place_id,
      price_level,
      rating,
      reference,
      reviews,
      url,
      utc_offset,
      vicinity,
      website,
    } = spot
    this.formatted_address = formatted_address
    this.formatted_phone_number = formatted_phone_number
    this.geometry = geometry
    this.id = id
    this.name = name
    this.opening_hours = opening_hours
    this.weekday_text = weekday_text
    this.place_id = place_id
    this.price_level = price_level
    this.rating = rating
    this.reference = reference
    this.reviews = reviews
    this.url = url
    this.utc_offset = utc_offset
    this.vicinity = vicinity
    this.website = website
    this.photos = photos

    if (photos && photos.length > 0) {
      var imageUrls = []
      photos.forEach(photo => {
        const { photo_reference } = photo
        if (photo_reference) imageUrls.push(`${Urls.photos_m}&photoreference=${photo_reference}`)
      })
      this.imageUrls = imageUrls
    }
  }
}

// MARK: - Parser

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

export const parseSpots = spots => {;
  return new Spot(spots);
}