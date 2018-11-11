import { createMaterialTopTabNavigator } from 'react-navigation';
import * as themes from '../../../utils/Theme';
import Like from './Like';
import Save from './Save';
import Itinerary from './Itinerary';

// MARK: - TabNavigator

export default createMaterialTopTabNavigator(
  {
    LikeTab: {
      screen: Like,
      navigationOptions: { title: 'お気に入り' },
    },
    SaveTab: {
      screen: Save,
      navigationOptions: { title: 'ストック' },
    },
    ItineraryTab: {
      screen: Itinerary,
      navigationOptions: { title: '工程表' },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'Search',
      tabBarOptions: {
        activeTintColor: themes.colors.main,
        inactiveTintColor: themes.colors.gray,
        labelStyle: {
          fontSize: 12,
          fontFamily: themes.fonts.regular,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 4,
          margin: 0,
        },
        indicatorStyle: {
          borderBottomColor: themes.colors.main,
          borderBottomWidth: 2,
        },
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        style: {
          backgroundColor: 'white',
        },
      },
      swipeEnabled: false,
    }),
  }
);