import React, { Component } from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import ImageCached from './ImageCached';
import Rate from './Rate';
import * as theme from '../utils/Theme';
import { images } from '../../assets';

export default class SpotItem extends Component {
  renderThubnail = () => (
    <ImageCached style={styles.thumbnail} uri={this.props.data.imageURL} showShadow />
  );

  renderInfo = () => {
    const {
      title,
      imageURL = '',
      rate = 0,
      total = 0,
      time,
      price_from,
      price_to,
      open_now } = this.props.data;

    return (
      <TouchableOpacity style={styles.infoContainer} onPress={this.props.onPress}>
        <View>
          <Text style={styles.title} numberOfLines={1}>{title}</Text>
          <Rate rate={rate} total={rate}/>
        </View>
        <View style={styles.detailsContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Image source={images.timer} style={styles.image} />
            <Text style={styles.text}>{time} h</Text>
          </View>
          <Text style={styles.text}>{`$${open_now} - ${open_now}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  renderArrow = () => {
    return (
      <View style={styles.arrowContainer}>
        <Image
          source={images.arrow}
          style={[styles.image, { width: 12, height: 12 }]}
          resizeMode={'contain'} />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderThubnail()}
        {this.renderInfo()}
        {this.renderArrow()}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width: '100%',
    height: 92.5,
    flexDirection: 'row',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 162,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  arrowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  thumbnail: {
    margin: 16,
    width: 100,
    height: 71.5,
    borderRadius: 5,
  },
  title: {
    fontFamily: theme.fonts.medium,
    color: theme.colors.darkGray,
    fontSize: 14,
    marginTop: 16,
  },
  image: {
    width: 16,
    height: 16,
    marginRight: 4,
    tintColor: theme.colors.gray,
  },
  text: {
    fontFamily: theme.fonts.regular,
    color: theme.colors.gray,
    fontSize: 14,
  },
};
