import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import * as themes from '../../utils/Theme';
import { TourItem } from '../../components';

export default class New extends Component {
  renderListItem = ({ item }) => {
    return (
      <TourItem style={styles.tour} item={item}/>
    );
  }

  render() {
    const { items } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>最近の投稿</Text>
          </View>
          <View style={styles.moreContainer}>
            <TouchableOpacity onPress={() => alert('tapped more')}>
              <Text style={styles.more}>もっと見る</Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          style={{ paddingLeft: 8 }}
          horizontal
          data={items ? items : []}
          renderItem={this.renderListItem}
          keyExtractor={item => item.tourImage}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    )
  }
}

const tourWidth = Dimensions.get('window').width / 2.5;
const tourHeight = tourWidth * 1.4;

const styles = {
  container: {
    backgroundColor: 'white',
    paddingTop: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: themes.fonts.bold,
    fontSize: 16,
    color: themes.colors.darkGray,
    paddingLeft: 16,
    textAlign: 'left',
  },
  more: {
    marginRight: 16,
    fontFamily: themes.fonts.medium,
    fontSize: 14,
    color: themes.colors.darkGray,
  },
  tour: {
    marginLeft: 8,
    width: tourWidth,
    height: tourHeight,
  },
}