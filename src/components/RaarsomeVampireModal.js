import React, { PureComponent } from 'react';
import { ImageBackground, Image, TouchableOpacity, Text, View } from 'react-native';
import Modal from 'react-native-modalbox';
import Video from 'react-native-video';
import { connect } from 'react-redux';

import { cameraModalOpen, avatarModalOpen } from '../actions';

import RaarsomeCameraModal from './common/RaarsomeCameraModal';

class RaarsomeVampireModal extends PureComponent {
    constructor(props) {
      super(props);
      this.onButtonPress=this.onButtonPress.bind(this);
      this.onSwipeDown=this.onSwipeDown.bind(this);
    }
    
    onSwipeDown() {
        //const { isAvatarModalOpen } = this.props;
        //console.log('Inside RaarsomeVampireModal onSwipeDown ' + isAvatarModalOpen);
        this.props.avatarModalOpen({ isAvatarModalOpen: false }); 
    }
    onButtonPress() {
        //const { isAvatarModalOpen, isCameraModalOpen } = this.props;
        this.props.avatarModalOpen({ isAvatarModalOpen: false }); 
        this.props.cameraModalOpen({ isCameraModalOpen: true }); 
    }
    onVideoLoad() {
        const { container, imageBackground, vampireImage, cameraImage} = styles; 
            return (
                <View style={ container }>
                  <ImageBackground 
                      source={require('../img/quotebubble1.png')} 
                      style={ imageBackground }>  
                      <Text>Time for lunch?</Text>
                      <Text>Show me?</Text>
                      <TouchableOpacity onPress={this.onButtonPress} >
                          <Image 
                              style={ cameraImage } 
                              source={require('../img/3dcamera2.png')} />
                      </TouchableOpacity>
                  </ImageBackground>
                  <Image 
                      style={ vampireImage } 
                      source={require('../img/kidvampirefull.png')} />
                </View>   
              );
    }
    
    render() {
        const { 
            container, backgroundVideo, imageBackground, vampireImage, cameraImage } = styles;        
        return (
            <Modal 
                onClosed={this.onSwipeDown} 
                isOpen={this.props.isAvatarModalOpen} 
                style={[container]} 
                position={'bottom'} 
                backdropColor={'transparent'}
                backdropOpacity={0.5}
                backdropContent={
                    <Video
                        source={require('../img/background.mov')}
                        repeat
                        resizeMode='cover'
                        style={ backgroundVideo }
                    />
                }>
                { this.onVideoLoad() }
            </Modal>
        );
    }
}

const styles = {
    container: {
        flexDirection: 'column',
        justifyContent:'flex-start',
        alignItems: 'flex-end',
        height: 350,
        backgroundColor: 'transparent'
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        //opacity: 0.70
    },
    imageBackground: {
        width: 140, 
        height: 110, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    vampireImage: {
        width:200,
        height:200
    }, 
    cameraImage: {
        width:35,
        height:35
    }
};

const mapStateToProps = ({ homescreenprops }) => {
    const { isAvatarModalOpen, isCameraModalOpen } = homescreenprops;
    //console.log('Inside RaarsomeVampireModal mapStateToProps '+ isAvatarModalOpen);
    return({
      isAvatarModalOpen, 
      isCameraModalOpen
    });
};

export default connect(mapStateToProps, {
    cameraModalOpen, avatarModalOpen
})(RaarsomeVampireModal);