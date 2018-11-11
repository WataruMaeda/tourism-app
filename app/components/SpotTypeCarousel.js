import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import * as theme from '../utils/Theme';
import { getSelectedPlaceTypes } from '../redux/actions/UserActions'
import { placeTypeImages } from '../../assets/images'
import { placeTypesName } from '../utils/Consts'

export default class SpotTypeCarousel extends Component {
  renderSpotTypeItem = ({ item, index }) => (
    <View style={styles.itemConainer} key={index}>
      <Image source={placeTypeImages[item]} style={styles.icon} />
      <Text style={styles.text}>{placeTypesName[item]}</Text>
    </View>
  )

  render() {
    const types = getSelectedPlaceTypes()
    const { didChangeItem } = this.props
    return (
      <View style={styles.container}>
        <Carousel
          data={types}
          renderItem={this.renderSpotTypeItem}
          sliderWidth={width}
          itemWidth={100}
          onSnapToItem={(index) => didChangeItem(index)}
          inactiveSlideOpacity={0.4}
          inactiveSlideScale={0.7}
          loop
        />
      </View>
    );
  }
}

// MARK: - Styles

const { width } = Dimensions.get('window');

const styles = {
  container: {
    width: '100%',
    shadowColor: 'darkgray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
  itemConainer: {
    padding: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 8,
    textAlign: 'center',
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkGray,
    fontSize: 12,
  }
};
