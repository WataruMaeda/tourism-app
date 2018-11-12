import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Dimensions } from 'react-native';
import { ImageCached } from '../components';
import * as themes from '../utils/Theme';

const initialRegion = {
  latitude: 35.652832,
  longitude: 139.839478,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
}

class Map extends Component {
  state = {
    currentRegion: initialRegion,
  }

  // MARK: - Timer + Region callback

  timer = null;

  setTimerUpdateRegion = (region) => {
    // since the region callback called frequentry, the last callback should be triggered
    if (region && region.latitude && region.longitude) {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const { onChangeRegion } = this.props;
        if (onChangeRegion) {
          const { latitude, longitude } = region
          // trigger callback pass back to coodinate
          onChangeRegion({
            lat: latitude,
            lng: longitude,
          });
        }
      }, 500);
    }
    this.setState({ currentRegion: region })
  }

  // MARK: - Renders

  render() {
    const { spots } = this.props;
    const { currentRegion = initialRegion } = this.state;
    const { Marker } = MapView;
    return (
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
        region={currentRegion}
        onRegionChangeComplete={(region) => {
          console.log('[##] region', region)
          this.setTimerUpdateRegion(region)
        }}>
        { spots && spots.map((spot) => (
          <Marker
            title={spot.title}
            coordinate={{
              latitude: spot.lat,
              longitude: spot.lng,
            }}>
            <ImageCached
              uri={spot.imageURL}
              style={styles.image}
            />
          </Marker>
        )) }
      </ MapView>
    )
  }
}

// MARK: - Styles

const { width } = Dimensions.get('window');

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: width / 1.68,
  },
  image: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: themes.colors.sub,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
};

// MARK: - Redux

const mapStateToProps = state => {
  return {
    spots: state.search.spotsNearby,
  };
};

export default connect(mapStateToProps)(Map);
