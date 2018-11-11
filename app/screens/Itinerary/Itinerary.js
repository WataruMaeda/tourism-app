import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Itinerary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> Hello Itinerary</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
  },
};
