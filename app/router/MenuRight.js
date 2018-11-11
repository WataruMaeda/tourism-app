import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DrawerActions } from 'react-navigation';
import { images } from '../../assets';

export default ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Itinerary')}>
      <Image source={images.itinerary} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = {
  icon: {
    margin: 8,
    marginRight: 16,
    width: 30,
    height: 30,
    tintColor: 'white',
    resizeMode: 'contain',
  },
};
