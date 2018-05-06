import React, { PureComponent } from 'react';
import Modal from 'react-native-modalbox';
import Video from 'react-native-video';
import { connect } from 'react-redux';

import { treasureModalOpen } from '../actions';

import RaarsomeCameraModal from './common/RaarsomeCameraModal';

class RaarsomeTreasureModal extends PureComponent {
    constructor(props) {
        super(props);
        this.onSwipeDown = this.onSwipeDown.bind(this);
    }
    onSwipeDown() {
        this.props.treasureModalOpen({ isTreasureModalOpen: false }); 
    }
    render() {
        const { container, treasureVideo } = styles;
        return (
            <Modal 
               onClosed={this.onSwipeDown} 
               isOpen={this.props.isTreasureModalOpen} 
               style={[container]} 
               position={'bottom'} 
               backdropColor={'transparent'}
               backdropOpacity={0.50}
               backdropContent={
                    <Video
                        source={require('../img/fire.mov')}
                        repeat
                        resizeMode='cover'
                        style={treasureVideo}
                    />
               }>

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
    treasureVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.50
    }
};

const mapStateToProps = ({ homescreenprops }) => {
    const { isTreasureModalOpen } = homescreenprops;
    //console.log('Inside RaarsomeTreasureModal mapStateToProps '+ isTreasureModalOpen);
    return({
      isTreasureModalOpen
    });
};

export default connect(mapStateToProps, {
    treasureModalOpen
})(RaarsomeTreasureModal);
