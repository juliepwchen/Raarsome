import React, { PureComponent } from 'react';
import { 
    TouchableOpacity, 
    Image, ImageBackground,View } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import Pulse from 'react-native-pulse';

import { treasureModalOpen, coinExist } from '../actions';

class RaarsomeImageBackground extends PureComponent {
    constructor(props) {
        super(props);
        this.onTreasureButtonPress = this.onTreasureButtonPress.bind(this);
        this.videoLoadError = this.videoLoadError.bind(this);
        this.videoLoads = this.videoLoads.bind(this);
        this.videoLoadStart = this.videoLoadStart.bind(this);
    }
    onTreasureButtonPress() {
        this.props.treasureModalOpen({ isTreasureModalOpen: true });
        this.props.coinExist({ isCoinExist: false });
    }

    videoLoadStart() {

    }
    videoLoads() {
      //console.log('Vampire finish video loading');
    }
    videoLoadError() {

    }

    render() {
        const { imageBackground, backgroundVideo, imageStyle } = styles;
        return (
          <ImageBackground 
            source={require('../img/clock7.png')} 
            style={ imageBackground }
          >
          <PercentageCircle 
              innerColor={'#A6CEE8'} 
              bgcolor={'transparent'} 
              borderWidth={20} 
              radius={125} 
              percent={75} 
              color={'goldenrod'}>
              <Video
                  source={require('../img/fish2.mov')}
                  repeat
                  resizeMode='cover'
                  style={ backgroundVideo }
                  onLoadStart={this.videoLoadStart}    
                  onLoad={this.videoLoads} 
                  onError={this.videoLoadError}          
              />
              {this.props.isCoinExist ? <TouchableOpacity onPress={this.onTreasureButtonPress} >
               
                <Pulse color='yellow' numPulses={1} diameter={125} 
                       speed={10} duration={100} />
                <Image
                    source={require('../img/goldcoin10.png')}
                    style={ {width: 50, height: 50, paddingTop: 20 } }
                /> 
              </TouchableOpacity> : <View></View>}
            </PercentageCircle>  
          </ImageBackground>
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
        //opacity: 0.70
    },
    imageBackground: {
        width: 325, 
        height: 325,
        alignItems: 'center', 
        justifyContent: 'center'
    },
    imageStyle: {
        width:50,
        height:50    
    }
}

const mapStateToProps = ({ homescreenprops }) => {
    const { isTreasureModalOpen, isCoinExist } = homescreenprops;
    return({
      isTreasureModalOpen, isCoinExist
    });
  };
  
export default connect(mapStateToProps, {
   treasureModalOpen, coinExist
})(RaarsomeImageBackground);

