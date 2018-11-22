import { Urls } from '../../utils/Apis'

class Spot {
  constructor(spot) {
    const {
      address_components,
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

    if (address_components && address_components.length > 0) {
      address_components.forEach(component => {
        const { long_name, short_name, types } = component
        if (long_name && short_name && types && types.length > 0) {
          types.forEach((type, idx) => {
            if (type === 'country') {
              this.country = idx === 0 ? long_name : short_name
            }
          })
        }
      })
    }
  }
}

export const parseSpots = spots => {
  return new Spot(spots);
}