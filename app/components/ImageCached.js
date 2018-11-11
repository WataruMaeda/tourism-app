import React from 'react';
import { Image } from 'react-native-expo-image-cache';

const preview = {
  uri:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8l5X4HwAGwQK68cljmAAAAABJRU5ErkJggg==',
};

export default ({ uri, style, showShadow = false }) => (
  <Image style={[style, showShadow && styles.container]} preview={preview} uri={uri} />
);

const styles = {
  container: {
    shadowColor: 'darkgray',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 3,
  },
};
