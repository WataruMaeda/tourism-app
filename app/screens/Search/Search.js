import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, FlatList } from 'react-native';
import { SpotTypeCarousel, SpotItem, Map } from '../../components';
import { setNearbySpots } from '../../redux/actions/SearchActions';
import { getSelectedPlaceTypes } from '../../redux/actions/UserActions';

const initialCoodinate = {
  lat: 35.652832,
  lng: 139.839478,
}

class Search extends Component {
  state = {
    placeTypeIdx: 0,
    currentCoodinate: initialCoodinate
  }

  fetchNearbySpots = (coodinate, index) => {
    const types = getSelectedPlaceTypes();
    setNearbySpots(coodinate, types[index]);
  };

  renderListItem = ({ item, index }) => (
    <SpotItem
      key={index}
      data={item}
      onPress={() => {
        const { navigation } = this.props;
        navigation.navigate('Spot');
      }}
    />
  );

  render() {
    const { spots } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <SpotTypeCarousel
          didChangeItem={index => {
            const { currentCoodinate = initialCoodinate } = this.state;
            this.fetchNearbySpots(currentCoodinate, index);
            this.setState({ placeTypeIdx: index })
          }}
        />
        <Map onChangeRegion={(coodinate) => {
          console.log('[##] region is ', coodinate)
          const { placeTypeIdx = 0 } = this.state;
          this.fetchNearbySpots(coodinate, placeTypeIdx);
          this.setState({ currentCoodinate: coodinate })
        }}/>
        {spots && (
          <FlatList data={spots} renderItem={this.renderListItem} keyExtractor={item => item.id} />
        )}
      </View>
    );
  }
}

// MARK: - Style

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
};

// MARK: - Redux

const mapStateToProps = state => {
  return {
    spots: state.search.spotsNearby,
  };
};

export default connect(mapStateToProps)(Search);
