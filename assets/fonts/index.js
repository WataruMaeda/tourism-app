import { Font } from 'expo';

export const fonts = [
  {
    thin: require('./rounded-mplus-1p-thin.ttf'),
  },
  {
    light: require('./rounded-mplus-1p-light.ttf'),
  },
  {
    regular: require('./rounded-mplus-1p-regular.ttf'),
  },
  {
    medium: require('./rounded-mplus-1p-medium.ttf'),
  },
  {
    bold: require('./rounded-mplus-1p-bold.ttf'),
  },
  {
    heavy: require('./rounded-mplus-1p-heavy.ttf'),
  },
  {
    heavyBold: require('./rounded-mplus-1p-black.ttf'),
  },
];

export const fontAssets = fonts.map(font => Font.loadAsync(font));
