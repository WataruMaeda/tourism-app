import React, { Component } from 'react';
import { MapView } from 'expo';
import { Dimensions } from 'react-native';

export default class Map extends Component {

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onRegionChangeComplete={(region) => {
          console.log('[##] region', region)
        }}
      />
    )
  }
}

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
};