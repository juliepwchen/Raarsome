import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import Modal from 'react-native-modalbox';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';

import { cameraModalOpen } from '../../actions';

class RaarsomeCameraModal extends PureComponent {
    constructor(props) {
        super(props);
        this.onSwipeDown=this.onSwipeDown.bind(this);
        this.takePicture = this.takePicture.bind(this);

    }
    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          console.log(data.uri);
          this.props.cameraModalOpen({ isCameraModalOpen: false }); 
        }
    };
    onSwipeDown() {
        this.props.cameraModalOpen({ isCameraModalOpen: false }); 
    }
    render() {
        const { container, preview, capture, textStyle, viewStyle } = styles;
        return (
            <Modal
                onClosed={this.onSwipeDown}  
                isOpen={this.props.isCameraModalOpen} 
                style={[container]} 
                position={'bottom'} >
                <RNCamera
                    ref={ref => {
                    this.camera = ref;
                    }}
                    style = {preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                    playSoundOnCapture
                />
                <View style={viewStyle}>
                    <TouchableOpacity
                        onPress={this.takePicture}
                        style = {capture}
                    >
                        <Text style={textStyle}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </Modal> 
        );
    }
}

const styles = {
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }, 
    textStyle: {
        fontSize: 14
    }, 
    viewStyle: {
        flex: 0, 
        flexDirection: 'row', 
        justifyContent: 'center'
    }
};

const mapStateToProps = ({ homescreenprops }) => {
    const { isCameraModalOpen } = homescreenprops;
    //console.log('Inside RaarsomeCameraModalModal mapStateToProps '+ isCameraModalOpen);
    return({
      isCameraModalOpen
    });
};

export default connect(mapStateToProps, {
    cameraModalOpen
})(RaarsomeCameraModal);