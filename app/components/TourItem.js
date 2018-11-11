import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import ImageCached from './ImageCached';
import ImageButton from './ImageButton';
import Rate from './Rate';
import * as themes from '../utils/Theme';
import { images } from '../../assets';

export default class TourItem extends Component {
  render() {
    const { style = {}, item, navigation } = this.props;
    const { tourName, tourImage, userImage, location, numberOfPhoto, expectTime } = item;
    return (
      <TouchableOpacity style={style} onPress={() => navigation.navigate('Tour')}>
        <View style={styles.container}>
          <ImageCached uri={tourImage} style={styles.backgroundImage} />
          <View style={styles.infoContainer}>
            <View style={styles.titleContainer}>
              <ImageButton
                source={{ uri: userImage }}
                imageStyle={styles.profileImage}
                onPress={() => alert('profile image tapped')}
              />
              <View style={styles.titleContainer}>
                <Text style={styles.name}>{tourName}</Text>
              </View>
            </View>
            <View style={styles.rateContainer}>
              <Rate rate={4} total={'123'} />
            </View>
            <View style={styles.detailContainer}>
              <View style={styles.itemContainer}>
                <Image source={images.location} style={styles.itemImage} resizeMode={'contain'} />
                <Text style={styles.itemTitle}>{location}</Text>
              </View>
              <View style={styles.itemContainer}>
                <Image source={images.photo} style={styles.itemImage} resizeMode={'contain'} />
                <Text style={styles.itemTitle}>{numberOfPhoto}</Text>
              </View>
              <View style={styles.itemContainer}>
                <Image source={images.timer} style={styles.itemImage} resizeMode={'contain'} />
                <Text style={styles.itemTitle}>{expectTime}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    borderRadius: 5,
    overflow: 'hidden',
  },
  infoContainer: {
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 8,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  rateContainer: {
    marginTop: 8,
  },
  detailContainer: {
    flexDirection: 'row',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginRight: 8,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  profileImage: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: themes.colors.sub,
  },
  nameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: themes.fonts.bold,
    fontSize: 14,
    color: 'white',
    paddingLeft: 8,
  },
  itemImage: {
    width: 14,
    height: 14,
    tintColor: 'white',
  },
  itemTitle: {
    paddingLeft: 4,
    fontFamily: themes.fonts.medium,
    fontSize: 12,
    color: 'white',
  },
};
