import React, { Component } from 'react';
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
    return (
      <View style={styles.footerContainer}>
        <Text style={styles.title}>テストテストテスト</Text>
        <View style={styles.footerBottomContainer}>
          <View style={styles.infoContainer}>
            <Rate rate={3} total={'20'} />
            <View style={styles.locationContainer}>
              <Image source={images.location} style={styles.locaitonImage} resizeMode={'contain'} />
              <Text style={styles.location}>ロケーション</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <ImageCached
              uri={
                'https://atmosphereresorts.com/wp-content/uploads/2015/06/Atmosphere-Resorts-Spa-Luxury-Resort.jpg'
              }
              style={styles.spotImage}
            />
            <ImageCached
              uri={
                'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Town_and_Country_fh000023.jpg/1200px-Town_and_Country_fh000023.jpg'
              }
              style={styles.spotImage}
            />
            <ImageCached
              uri={
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbcYMKjPp7k55MXvpaWt7KcjTawXhcfML13gevMa2Vqcfg0Nqf'
              }
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
