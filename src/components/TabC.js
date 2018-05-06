import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class TabC extends Component {

  static navigationOptions = {
    //tabBarLabel: 'TabC',
    tabBarVisible: false,
    tabBarIcon: ({ tintColor }) => (
      <View>
      
      <Icon name='info-with-circle' size={30} color="white" style={ {marginRight: 10}} />
      <View style={{ position: 'absolute', right: 0, top: 0, 
            backgroundColor: 'black', 
            borderRadius: 10, width: 20, height: 20, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>5</Text>
      </View>
      </View>
    ),
  };

  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>I'm Tab C</Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  }
})

export default TabC;