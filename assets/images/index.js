import { Asset } from 'expo';

export const images = {
  menu: require('./menu.png'),
  home: require('./home.png'),
  search: require('./search.png'),
  profile: require('./profile.png'),
  itinerary: require('./itinerary.png'),
  timer: require('./timer.png'),
  star: require('./star.png'),
  arrow: require('./arrow.png'),
  save: require('./save.png'),
  location: require('./location.png'),
  gray: require('./gray.png'),
  instagram: require('./instagram.png'),
  twitter: require('./twitter.png'),
  facebook: require('./facebook.png'),
  photo: require('./photo.png'),
};

export const placeTypeImages = {
  amusement_park : require('./placeTypes/amusement_park.png'),
  art_gallery : require('./placeTypes/art_gallery.png'),
  bar : require('./placeTypes/bar.png'),
  cafe : require('./placeTypes/cafe.png'),
  movie_theater : require('./placeTypes/movie_theater.png'),
  museum : require('./placeTypes/museum.png'),
  night_club : require('./placeTypes/night_club.png'),
  park : require('./placeTypes/park.png'),
  restaurant : require('./placeTypes/restaurant.png'),
  shopping_mall : require('./placeTypes/shopping_mall.png'),
  stadium : require('./placeTypes/stadium.png'),
  zoo : require('./placeTypes/zoo.png'),
  airport : require('./placeTypes/airport.png'),
  aquarium : require('./placeTypes/aquarium.png'),
  atm : require('./placeTypes/atm.png'),
  bowling_alley : require('./placeTypes/bowling_alley.png'),
  bus_station : require('./placeTypes/bus_station.png'),
  car_rental : require('./placeTypes/car_rental.png'),
  casino : require('./placeTypes/casino.png'),
  city_hall : require('./placeTypes/city_hall.png'),
  convenience_store : require('./placeTypes/convenience_store.png'),
  department_store : require('./placeTypes/department_store.png'),
  embassy : require('./placeTypes/embassy.png'),
  gas_station : require('./placeTypes/gas_station.png'),
  gym : require('./placeTypes/gym.png'),
  hair_care : require('./placeTypes/hair_care.png'),
  library : require('./placeTypes/library.png'),
  liquor_store : require('./placeTypes/liquor_store.png'),
  lodging : require('./placeTypes/lodging.png'),
  spa : require('./placeTypes/spa.png'),
  supermarket : require('./placeTypes/supermarket.png'),
  transit_station : require('./placeTypes/transit_station.png'),
};

var imgs = [];
Object.keys(images).forEach(key => imgs.push(images[key]));
export const imageAssets = imgs.map(img => Asset.fromModule(img).downloadAsync());
