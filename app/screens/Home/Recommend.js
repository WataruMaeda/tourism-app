import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { TourItem, ImageCached } from '../../components';
import * as themes from '../../utils/Theme';

export default ({ style, items, navigation }) => {
  const { userName, userImage, tours } = items;
  return (
    <View style={style}>
      <View style={styles.profileContainer}>
        <View style={{ flexDirection: 'row' }}>
          <ImageCached uri={userImage} style={styles.userImage} />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{userName}</Text>
          </View>
        </View>
        <View style={styles.moreContainer}>
          <TouchableOpacity onPress={() => alert('tapped more')}>
            <Text style={styles.more}>もっと見る</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.mainTourContainer}>
        <TourItem style={styles.mainTour} item={tours[0]} navigation={navigation} />
        <View style={styles.subTourContainer}>
          <TourItem
            style={[styles.subTour, { paddingBottom: 4 }]}
            item={tours[1]}
            navigation={navigation}
          />
          <TourItem
            style={[styles.subTour, { paddingTop: 4 }]}
            item={tours[2]}
            navigation={navigation}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  mainTourContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  subTourContainer: {
    width: '100%',
    height: '100%',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  moreContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: themes.colors.sub,
  },
  name: {
    fontFamily: themes.fonts.bold,
    fontSize: 16,
    color: themes.colors.darkGray,
    paddingLeft: 8,
    textAlign: 'left',
  },
  more: {
    fontFamily: themes.fonts.medium,
    fontSize: 14,
    color: themes.colors.darkGray,
  },
  mainTour: {
    width: '50%',
    height: '100%',
    paddingRight: 4,
  },
  subTour: {
    width: '50%',
    height: '50%',
    paddingLeft: 4,
  },
};
