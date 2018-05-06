import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';

import Icon from 'react-native-vector-icons/Entypo';

class TabA extends Component {
  static navigationOptions = {
    //tabBarLabel: '',
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
        <Text style={styles.text}>I'm Tab A</Text>
      </View>
      )
  }
}
export default TabA
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#c0392b',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
  },
})