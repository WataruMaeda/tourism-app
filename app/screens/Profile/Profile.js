import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import * as UserActions from '../../redux/actions/UserActions';
import Header from './Header';
import { Parallax } from '../../components';
import { images } from '../../../assets';
import ProfileTabs from './ProfileTabs';

const width = Dimensions.get('window').width;
const height = width / 1.6;

export default class Profile extends Component {
  componentWillMount() {
    // Redux store action sample
    UserActions.setUserName('User');
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Parallax
          backgroundSource={images.gray}
          windowHeight={height}
          coverStatusBar
          header={<Header navigation={navigation} imgSize={height / 2} />}
          scrollableViewStyle={{ backgroundColor: 'white' }}>
          <ProfileTabs />
        </Parallax>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 24,
    fontFamily: 'Baskerville',
  },
};
