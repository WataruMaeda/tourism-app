import React, { Component } from 'react';
import _ from 'lodash'
import { Text, View, Image } from 'react-native';
import { ImageButton, ImageCached, Rate } from '../../components';
import { images } from '../../../assets';
import * as themes from '../../utils/Theme';
import { isIphoneX } from '../../utils/Device';

export default class Header extends Component {
  renderHeader = () => {
    const { navigation } = this.props;
    return (
      <View style={styles.headerContainer}>
        <ImageButton
          source={images.arrow}
          containerStyle={styles.leftButton}
          imageStyle={styles.leftButtonImage}
          onPress={() => navigation.goBack(null)}
        />
        <ImageButton
          source={images.save}
          containerStyle={styles.rightButton}
          imageStyle={styles.rightButtonImage}
          onPress={() => alert('saved place')}
        />
      </View>
    );
  };

  renderFooter = () => {
    const { spot } = this.props;
    const {
      name = '',
      rating = 0,
      imageUrls = [],
      country = '',
    } = spot
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.footerBottomContainer}>
          <View style={styles.infoContainer}>
            <Rate rate={rating} total={rating} />
            <View style={styles.locationContainer}>
              <Image source={images.location} style={styles.locaitonImage} resizeMode={'contain'} />
              <Text style={styles.location}>{country}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ImageCached
              uri={ imageUrls[1] }
              style={styles.spotImage}
            />
            <ImageCached
              uri={ imageUrls[2] }
              style={styles.spotImage}
            />
            <ImageCached
              uri={ imageUrls[3] }
              style={styles.spotImage}
            />
            <ImageButton
              source={images.arrow}
              imageStyle={{ width: 16, height: 44, marginRight: 8 }}
              onPress={() => alert('more photos')}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderFooter()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  footerBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoContainer: {
    paddingTop: 4,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  locationContainer: {
    marginTop: 4,
    flexDirection: 'row',
  },
  title: {
    fontFamily: themes.fonts.bold,
    fontSize: 16,
    color: 'white',
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  location: {
    marginLeft: 4,
    fontFamily: themes.fonts.regular,
    fontSize: 14,
    color: 'white',
  },
  locaitonImage: {
    width: 14,
    height: 14,
    marginTop: 3,
  },
  rightButton: {
    width: 44,
    height: 44,
    marginTop: isIphoneX() ? 50 : 32,
    marginRight: 16,
  },
  leftButton: {
    width: 44,
    height: 44,
    marginTop: isIphoneX() ? 50 : 32,
    marginLeft: 16,
  },
  rightButtonImage: {
    width: 30,
    height: 30,
  },
  leftButtonImage: {
    width: 24,
    height: 24,
    transform: [{ rotate: '180deg' }],
  },
  spotImage: {
    width: 44,
    height: 44,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    marginRight: 8,
  },
};
