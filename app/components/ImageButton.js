import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

export default ({ source, onPress, containerStyle, imageStyle }) => (
  <TouchableOpacity style={containerStyle} onPress={onPress}>
    <Image source={source} resizeMode={'contain'} style={imageStyle}/>
  </TouchableOpacity>
)