import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Info extends Component {
  
  render() {
    console.log('[###] info', this.props.spot)
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  }
}