import React, { PureComponent } from 'react';
import { TouchableOpacity, Platform, View, Text, FlatList } from 'react-native';
import { horizontalFlatListData, horizontalStatus } from './horizontalFlatListData';
import Icon from 'react-native-vector-icons/Entypo';
import RaarsomeFriendsScreen from './RaarsomeFriendsScreen';

class HorizontalFlatListItem extends PureComponent {
    render() {
        return(
             <RaarsomeFriendsScreen />
        );
    }  
}

class RaarsomeVerticalScroll extends PureComponent {
    static navigationOptions = {
        tabBarLabel: 'RaarsomeFriendsScreen',
        
        tabBarIcon: ({ tintColor }) => (
          <Icon name='info-with-circle' 
                size={20} color="white" />
        ),
    };
    render() {
        const { itemViewStyle, container, flatListStyle, textListHeaderStyle } = styles;

        return(
            <View style={ container }>
              <Text style={ textListHeaderStyle } >Friends</Text>
              <View style={ itemViewStyle }>
                <FlatList 
                    style={ flatListStyle }
                    horizontal={false}
                    data={horizontalFlatListData}
                    
                    renderItem={({item, index}) =>
                        <HorizontalFlatListItem 
                        item={item} index={index} 
                        parentFlatList={this} />
                    }
                    keyExtractor={(item, index)=>item.hour}
                />
              </View>
            </View>
        );
    }
}

const styles = {
  textListHeaderStyle: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    paddingLeft: 15
  },
  container: {
    flex: 1,
    flexDirection: 'column', 
    marginTop: Platform.OS === 'ios' ? 1 : 0,
  },
  itemViewStyle: {
    height: 300
  },
  flatListStyle: {
      backgroundColor: 'black',
      opacity: 0.80
  }
}

export default RaarsomeVerticalScroll;