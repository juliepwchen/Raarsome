import React, { PureComponent } from 'react';
import { 
  TouchableOpacity, StatusBar, 
  Image, ScrollView, View, Text, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/Entypo';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import Sound from 'react-native-sound';
import ActionButton from 'react-native-action-button';

import { cameraModalOpen, avatarModalOpen, btnFABOpen } from '../actions';

import RaarsomeStatusBar from './common/RaarsomeStatusBar';
import RaarsomeCameraModal from './common/RaarsomeCameraModal';
import RaarsomeVampireModal from './RaarsomeVampireModal';
import RaarsomeTreasureModal from './RaarsomeTreasureModal';
import RaarsomeImageBackground from './RaarsomeImageBackground';
import RaarsomeFriendsScreen from './RaarsomeFriendsScreen';
import RaarsomeVerticalScroll from './RaarsomeVerticalScroll';

class RaarsomeHomeScreen extends PureComponent {
      constructor(props) {
        super(props);
        this.onFABPress = this.onFABPress.bind(this);
        this.onButtonPress=this.onButtonPress.bind(this);
        this.onNavigationPress=this.onNavigationPress.bind(this);
        this.videoLoadError = this.videoLoadError.bind(this);
        this.videoLoads = this.videoLoads.bind(this);
        this.videoLoadStart = this.videoLoadStart.bind(this);
      }
      componentDidMount()
      {
        
          //this.timer = setInterval(() =>
          //{
              //this.getCurrentTime();
              //console.log('Current Time =' + this.state.currentDay + ' ' + this.state.currentTime);
          //}, 1000);
          //TrackPlayer.setupPlayer().then(() => {
            // The player is ready to be used
          //});

      } 

      //set state or dispatch any redux actions
      componentWillReceiveProps() {

      }

    static navigationOptions = {
      title: '',
      headerTitle: (
        <View style={ {flex: 1, flexDirection: 'row', justifyContent: 'center', paddingTop: 14 } }>
          <Text style={ {color:'white', fontSize: 16} }> 500 </Text>       
          <Image
            source={require('../img/goldcoin10.png')}
            style={ {width: 17, height: 17, paddingTop: 20 } }
          />
        </View>
      ),
      headerLeft: (
        <Image
          source={require('../img/logo.png')}
          style={ {width: 80, height: 25, marginLeft: 10} }
        />
      ),
      headerRight: (
              <Icon name='info-with-circle' size={20} color="white" style={ {marginRight: 10}} />
              //<Button
              //onPress={() => this.props.navigation.navigate('DrawerOpen')}
              //title="Go back home"
            ///>
      ),
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
      //drawerLabel: 'Notifications',
      //drawerIcon: ({ tintColor }) => (
        //<Button
          //onPress={() => this.props.navigation.navigate('DrawerOpen')}
          //title="Go back home"
        ///>
      //),
    };

    /* 
    getCurrentTime = () =>
{
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    let am_pm = 'pm';

    if( minutes < 10 )
    {
        minutes = '0' + minutes;
    }

    if( seconds < 10 )
    {
        seconds = '0' + seconds;
    }

    if( hour > 12 )
    {
        hour = hour - 12;
    }

    if( hour == 0 )
    {
        hour = 12;
    }

    if( new Date().getHours() < 12 )
    {
        am_pm = 'am';
    }
    
    //this.setState({ currentTime: hour + ':' + minutes + ':' + seconds + ' ' + am_pm });

    /* this.daysArray.map(( item, key ) =>
    {
        if( key == new Date().getDay() )
        {
            this.setState({ currentDay: item.toUpperCase() });
        }
    })      
}  */

    onButtonPress() {
      this.props.avatarModalOpen({ isAvatarModalOpen: true });
      this.onSoundPress();
    }
    onNavigationPress() {
      this.props.navigation.navigate('Details');
    }

    onSoundPress() {
      // Enable playback in silence mode
      Sound.setCategory('Playback', true);

      // Load the sound file
      const soundfile = {
        url: require('../img/nff-soap.wav')
      }
      const music = new Sound(soundfile.url, (error) => {
        if (error) {
          //console.log('failed to load the sound', error);
          return;
        }
        // loaded successfully, play			
        music.play((success) => {
          if (success) {
            //console.log('successfully finished playing');
          } else {
            //console.log('playback failed due to audio decoding errors');
          }
        });
      });
    }

    onFABPress() {
      this.props.btnFABOpen({ isFABOpen: !this.props.isFABOpen }); 
    }

    videoLoadStart() {

    }
    videoLoads() {
      //console.log('finish video loading');
    }
    videoLoadError() {

    }

    render() {
      const { viewStyle } = styles;
      //const Pulse = require('react-native-pulse');
      
      return (
        <View style={viewStyle}>
          <RaarsomeStatusBar />
          <RaarsomeCameraModal isOpen={this.props.isCameraModalOpen} />
          <RaarsomeVampireModal isOpen={this.props.isAvatarModalOpen}/>
          <RaarsomeTreasureModal isOpen={this.props.isTreasureModalOpen}/>
          
          <Video
            source={require('../img/fish.mov')}
            repeat
            resizeMode='cover'
            style={ styles.backgroundVideo}
            onLoadStart={this.videoLoadStart}    
            onLoad={this.videoLoads} 
            onError={this.videoLoadError}          
          />

          <RaarsomeImageBackground />
          <RaarsomeVerticalScroll />

          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item size={35} buttonColor='#9b59b6' title="New Task" onPress={this.onButtonPress}>     
              <Icon name='info-with-circle' size={20} color="white" style={ styles.actionButtonIcon } />
            </ActionButton.Item>
            <ActionButton.Item size={40} buttonColor='#3498db' title="Notifications" onPress={this.onButtonPress}>
              <Icon name='info-with-circle' size={20} color="white" style={ styles.actionButtonIcon } />
            </ActionButton.Item>
            <ActionButton.Item size={45} buttonColor='#1abc9c' title="All Tasks" onPress={this.onButtonPress}>
              <Icon name='info-with-circle' size={20} color="white" style={ styles.actionButtonIcon } />
            </ActionButton.Item>
         </ActionButton>
       
       </View>
      );
    }
}

const styles = {
  //this setting is required for Background, not depending on any other components
    backgroundVideo: {
      position: 'absolute',   
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      //opacity: 0.70
    },
    viewStyle: { 
        flex: 1,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
      margin: 10,
      backgroundColor: "#3B5998",
      color: "white",
      padding: 10
    },
    actionButtonIcon: {
      fontSize: 20,
      height: 22,
      color: 'white',
    },
};

// This function provides access to data in the Redux state in the React component
// In this example, the value of this.props.count will now always have the same value
// As the count value in the Redux state
const mapStateToProps = ({ homescreenprops }) => {
  const { isAvatarModalOpen, isCameraModalOpen, isFABOpen } = homescreenprops;
  //console.log('Inside RaarsomeHomeScreen mapStateToProps '+ isAvatarModalOpen);
  return({
    isAvatarModalOpen, 
    isCameraModalOpen,
    isFABOpen
  });
};

// This function provides a means of sending actions so that data in the Redux store
// can be modified. In this example, calling this.props.cameraModalOpen() will now dispatch
// (send) an action so that the reducer can update the Redux state.
function mapDispatchToProps(dispatch) {
  return {
    cameraModalOpen: () => dispatch(cameraModalOpen()),
    avatarModalOpen: () => dispatch(avatarModalOpen())
  }
}

export default connect(mapStateToProps, {
  cameraModalOpen, avatarModalOpen, btnFABOpen
})(RaarsomeHomeScreen);