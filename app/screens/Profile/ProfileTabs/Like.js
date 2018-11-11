import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { SpotItem } from '../../../components';
import * as theme from '../../../utils/Theme';

const data = [
  { title: 'キャピラノサスペンションブリッジ', rate: 3, total: 124, time: 8, price_from: 20, price_to: 30, imageURL: 'https://www.insidevancouver.ca/wp-content/uploads/2016/08/Treetops-Adventure-2-550x413.jpg' },
  { title: 'ワイエンスワールド', rate: 5, total: 102, time: 8, price_from: 20, price_to: 30, imageURL: 'https://cdn.pixabay.com/photo/2013/11/15/02/04/science-world-210775_960_720.jpg' },
  { title: 'ビクトリア', rate: 4, total: 329, time: 8, price_from: 20, price_to: 30, imageURL: 'https://media-cdn.tripadvisor.com/media/photo-s/08/1f/79/23/victoria-s-beautiful.jpg' },
  { title: 'ダウンタウン', rate: 2, total: 1007, time: 8, price_from: 20, price_to: 30, imageURL: 'http://spacing.ca/vancouver/wp-content/uploads/sites/6/2015/08/Iconic-Beauty-Shots-06-X3-600x397.jpg' },
  { title: 'チャイナタウン', rate: 1, total: 12, time: 8, price_from: 20, price_to: 30, imageURL: 'https://d2ciprw05cjhos.cloudfront.net/files/v3/styles/gs_large/public/images/16/08/chinatown_0.jpg?itok=2cEUw5oX' },
]

export default class Like extends Component {
  renderListItem = ({ item, index }) => {
    return (
      <SpotItem key={index} data={item} onPress={() => alert('hello')}/>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          style={styles.list}
          renderItem={this.renderListItem}
          keyExtractor={item => item.title}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  map: {
    width: '100%',
    height: 200,
  },
  list: {
    backgroundColor: theme.colors.lightGray,
  },
};
