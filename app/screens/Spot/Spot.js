import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Parallax } from '../../components';
import Header from './Header';
import { getSpotDetails } from '../../redux/actions/SpotActions'

export default class Spot extends Component {
  state = {
    spots: null,
  }

  componentWillMount() {
    const { navigation } = this.props;
    const placeId = navigation.getParam('place_id')
    if (placeId) {
      getSpotDetails(placeId).then(spots => {
        console.log('[##] spots persed', spots)
        if (spots) this.setState({ spots })
      }).catch(e => {
        alert('hmm error..')
      })
    }
  }

  render() {
    const { spots } = this.state;
    if (!spots) return null;
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

const width = Dimensions.get('window').width;
const height = width / 1.6;

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
};
