import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Parallax } from '../../components';
import Header from './Header';
import { getSpotDetails } from '../../redux/actions/SpotActions'

export default class Spot extends Component {
  state = {
    spot: null,
  }

  componentWillMount() {
    const { navigation } = this.props;
    const placeId = navigation.getParam('place_id')
    if (placeId) {
      getSpotDetails(placeId).then(spot => {
        if (spot) this.setState({ spot })
      }).catch(e => {
        alert('hmm error..')
      })
    }
  }

  render() {
    const { spot } = this.state;
    if (!spot) return null;
    const { imageUrls } = spot
    const uri = imageUrls && imageUrls.length > 0 ? imageUrls[0] : ''
    return (
      <View style={styles.container}>
        <Parallax
          backgroundSource={{ uri }}
          windowHeight={height}
          coverStatusBar
          header={<Header spot={spot} navigation={this.props.navigation} />}
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
