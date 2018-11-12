import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { ImageCached, ImageButton } from '../../components';
import * as themes from '../../utils/Theme';
import { images } from '../../../assets';

export default class Header extends Component {
  render() {
    const { imgSize } = this.props;
    const imgStyle = {
      width: imgSize,
      height: imgSize,
      borderRadius: imgSize / 2,
    };
    return (
      <View style={styles.container}>
        <ImageCached
          style={{ flex: 1 }}
          uri={'https://images.unsplash.com/photo-1497262693247-aa258f96c4f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e05d78f4a669263ea3a92b651672a035&auto=format&fit=crop&w=624&q=80'}
        />
        <View style={{ flex: 1 }} />
        <View style={styles.infoContainer}>
          <ImageCached
            uri={'https://images.unsplash.com/photo-1521117177129-ca6b2e68cb26?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cce4201e8d3a1905d4a5e7a99b2dfd53&auto=format&fit=crop&w=1050&q=80'}
            style={[styles.image, imgStyle]}
          />
          <Text style={styles.name}>エリザベス</Text>
          <View style={styles.snsCotnainer}>
            <ImageButton
              source={images.facebook}
              imageStyle={styles.sns}
              onPress={() => alert('facebook tapped')}
            />
            <ImageButton
              source={images.twitter}
              imageStyle={styles.sns}
              onPress={() => alert('twitter tapped')}
            />
            <ImageButton
              source={images.instagram}
              imageStyle={styles.sns}
              onPress={() => alert('instagram tapped')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
  },
  infoContainer: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  snsCotnainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  image: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: themes.colors.sub,
  },
  name: {
    fontFamily: themes.fonts.bold,
    fontSize: 16,
    color: themes.colors.darkGray,
    paddingTop: 8,
  },
  sns: {
    width: 24,
    height: 24,
    marginRight: 16,
    marginBottom: 12,
  },
}