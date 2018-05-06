import React, { Component } from 'react';
import { TouchableOpacity, Image, Button, View, Text } from 'react-native';
import Video from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';

class RaarsomeDetailsScreen extends Component {
  //static navigationOptions = {
    //header: { visible: true },
    //title: '',
  //};
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          
          <Video
                  source={require('../img/sea.mov')}
                  repeat
                  resizeMode='cover'
                  style={styles.backgroundVideo}
          />
         
          <TouchableOpacity 
            onPress={() => this.props.navigation.navigate('Home')} 
            style={{width: 150, height: 50, borderRadius: 10}}
          >
          <LinearGradient 
            colors={['#2583C2', '#A6CEE8']}
            style={styles.linearGradient}>
            <Text> Home </Text>
          </LinearGradient>
          </TouchableOpacity>

        </View>
      );
    }
  }

  const styles = {
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 0.60
    },
    linearGradient: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center' 
    }
  }

export default RaarsomeDetailsScreen;