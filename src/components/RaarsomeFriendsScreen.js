import React, { PureComponent } from 'react';
import { Image, TouchableOpacity, Platform, View, Text, FlatList } from 'react-native';
import { raarsomeFriendsFlatListData } from './raarsomeFriendsFlatListData';
import Icon from 'react-native-vector-icons/Entypo';

class HorizontalFlatListItem extends PureComponent {
    constructor(props) {
        super(props);
        this.onItemPress = this.onItemPress.bind(this);
    }
    onItemPress() {

    }
    
    render() {
        const { bnStyle, horizontalViewStyle, textStyle } = styles;
        return(
            <View style={ horizontalViewStyle }>
              <TouchableOpacity style={bnStyle} onPress={this.onItemPress} />
              
              <Text style={ textStyle }>{this.props.item.labelActivity}</Text>
              <Image
                    source={this.props.item.imageActivity}
                    style={ {width: 110, height: 130, paddingTop: 1 } }
                /> 

            </View>
        );
    }  
}

class RaarsomeFriendsScreen extends PureComponent {
    
    render() {
        const { itemViewStyle, container, flatListStyle } = styles;

        return(
            <View style={ container }>
              <View style={ itemViewStyle }>
                <FlatList 
                    style={ flatListStyle }
                    horizontal={true}
                    data={raarsomeFriendsFlatListData}
                    
                    renderItem={({item, index}) =>
                        <HorizontalFlatListItem 
                        item={item} index={index} 
                        parentFlatList={this} />
                    }
                    keyExtractor={(item, index)=>item.friendID}
                />
              </View>
            </View>
        );
    }
}

const styles = {
 
  container: {
    flex: 1,
    flexDirection: 'column', 
    marginTop: Platform.OS === 'ios' ? 0 : 0,
  },
  itemViewStyle: {
    height: 175
  },
  flatListStyle: {
      backgroundColor: 'black',
      //opacity: 0.9
  },
  horizontalViewStyle: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      width: 115,
      borderWidth:1,
      borderRadius: 10,
      borderColor: 'grey',
      margin: 4
  },
  textStyle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      margin: 1
  },
  bnStyle: {
    position: 'absolute',   
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}

export default RaarsomeFriendsScreen;