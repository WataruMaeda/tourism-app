import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation';
import { Search, Home, Profile, SideMenu, Itinerary, Tour, Spot } from '../screens';
import * as theme from '../utils/Theme';
import { images } from '../../assets';
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';
import Tab from './Tab';

// MARK: - StackNavigator

const searchNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: ({ navigation }) => ({
      title: 'Tourism',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: theme.colors.main },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: theme.fonts.heavy,
      },
      headerLeft: <MenuLeft navigation={navigation} />,
      headerRight: <MenuRight navigation={navigation} />,
    }),
  },
  Itinerary: {
    screen: Itinerary,
    navigationOptions: ({ navigation }) => ({
      title: 'Itinerary',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: theme.colors.main },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: theme.fonts.heavy,
      },
    }),
  },
  Spot: {
    screen: Spot,
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
});

const homeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Tourism',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: theme.colors.main },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: theme.fonts.heavy,
      },
      headerLeft: <MenuLeft navigation={navigation} />,
      headerRight: <MenuRight navigation={navigation} />,
    }),
  },
  Tour: {
    screen: Tour,
    navigationOptions: ({ navigation }) => ({
      title: 'Tour',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: theme.colors.main },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: theme.fonts.heavy,
      },
    }),
  },
});

const profileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Tourism',
      headerTintColor: 'white',
      headerStyle: { backgroundColor: theme.colors.main },
      headerTitleStyle: {
        fontSize: 18,
        fontFamily: theme.fonts.heavy,
      },
      headerLeft: <MenuLeft navigation={navigation} />,
      headerRight: <MenuRight navigation={navigation} />,
    }),
  },
});

// MARK: - TabNavigator

const tabNavigator = createBottomTabNavigator(
  {
    SearchTab: {
      screen: searchNavigator,
      navigationOptions: { title: 'Search' },
    },
    HomeTab: {
      screen: homeNavigator,
      navigationOptions: { title: 'Home' },
    },
    ProfileTab: {
      screen: profileNavigator,
      navigationOptions: { title: 'Profile' },
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        var source;
        switch (navigation.state.routeName) {
          case 'SearchTab':
            source = images.search;
            break;
          case 'HomeTab':
            source = images.home;
            break;
          case 'ProfileTab':
            source = images.profile;
            break;
          default:
            break;
        }
        return <Tab source={source} focused={focused} />;
      },
      initialRouteName: 'Search',
      tabBarOptions: {
        activeTintColor: theme.colors.main,
        inactiveTintColor: theme.colors.gray,
        style: {
          // backgroundColor: 'white',
          // borderTopColor: '#gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        },
      },
      swipeEnabled: false,
    }),
  }
);

// MARK: - DrawerNavigator

export default createDrawerNavigator(
  {
    TabNavigator: { screen: tabNavigator },
  },
  {
    contentComponent: SideMenu,
  }
);
