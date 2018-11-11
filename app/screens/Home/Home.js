import React, { Component } from 'react';
import axios from 'axios'
import { StatusBar, ScrollView, Dimensions } from 'react-native';
import Recommend from './Recommend'
import New from './New'
import data from './test.data';
import { Urls } from '../../utils/Consts'

export default class Home extends Component {
  render() {
    const { navigation } = this.props
    return (
      <ScrollView style={{ backgroundColor: 'white' }} contentContainerStyle={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <Recommend style={styles.recommend} items={data} navigation={navigation}/>
        <New items={data.tours} navigation={navigation}/>
      </ScrollView>
    );
  }
}

// MARK: - Styles

const { width } = Dimensions.get('window');

const styles = {
  container: {
    backgroundColor: 'white',
  },
  recommend: {
    width: '100%',
    height: width / 1.2,
    padding: 16,
  },
};
