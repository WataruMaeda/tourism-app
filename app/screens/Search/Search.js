import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StatusBar, FlatList } from 'react-native';
import { SpotTypeCarousel, SpotItem, Map } from '../../components';
import { setNearbySpots } from '../../redux/actions/SearchActions';
import { getSelectedPlaceTypes } from '../../redux/actions/UserActions';

class Search extends Component {
  componentWillMount() {
    this.fetchNearbySpots(0);
  }

  fetchNearbySpots = (index) => {
    const types = getSelectedPlaceTypes();
    setNearbySpots(types[index]);
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
            this.fetchNearbySpots(index);
          }}
        />
        <Map />
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
