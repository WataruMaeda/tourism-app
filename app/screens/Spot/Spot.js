import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Parallax } from '../../components';
import Header from './Header';

const width = Dimensions.get('window').width;
const height = width / 1.6;

export default class Spot extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Parallax
          backgroundSource={{ 
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8vn3gtpzy31ETeBHeKnw9dyYxVYPuMFUtwLHMeBl6r5FtBcifRw',
           }}
          windowHeight={height}
          coverStatusBar
          header={<Header navigation={this.props.navigation} />}
          scrollableViewStyle={{ backgroundColor: 'white' }}>
          <Text>aaaa</Text>
        </Parallax>
      </View>
    );
  }
}

// MARK: - Styles

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
};
