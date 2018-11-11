import React from 'react';
import { Text, View, Image } from 'react-native';
import { images } from '../../assets';
import * as theme from '../utils/Theme';

export default ({ rate = 0, total = 0, height = 16, starMargin = 4 }) => {
  return (
    <View style={[styles.container, { height }]}>
      {renderStars(rate, height, starMargin)}
      <Text style={styles.title}>{total}</Text>
    </View>
  );
};

const renderStars = (rate, size, starMargin) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Image
        source={images.star}
        key={i}
        style={{
          width: size,
          height: size,
          marginRight: starMargin,
          tintColor: rate >= i ? theme.colors.sub : theme.colors.gray,
        }}
      />
    );
  }
  return stars;
};

const styles = {
  container: {
    flexDirection: 'row',
  },
  title: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.light,
    fontSize: 14,
    marginLeft: 12,
  },
};
