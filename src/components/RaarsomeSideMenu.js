import React, { PureComponent } from 'react';
import { View, Switch, SectionList, Platform, Alert, Text } from 'react-native';

class RaarsomeSideMenu extends PureComponent {
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

    constructor() {
        super();
        this.state = {
           switch1Value: false,
           switch2Value: false
        }
        this.toggleSwitch1 = this.toggleSwitch1.bind(this);
        this.toggleSwitch2 = this.toggleSwitch2.bind(this);
        //this.renderSectionListItem = this.renderSectionListItem.bind(this);
     }

     toggleSwitch1() {
        this.setState({switch1Value: !this.state.switch1Value})
        //console.log('Switch 1 is: ' + value)
     }
     toggleSwitch2() {
        this.setState({switch2Value: !this.state.switch2Value})
        //console.log('Switch 2 is: ' + value)
    }
    GetSectionListItem (item) {
        Alert.alert(item)
    }

    renderSectionItem(item) {
        return (
            <View style={styles.sectionItemViewStyle} >
                <Text style={styles.SectionListItemStyle} 
                    onPress={this.GetSectionListItem.bind(this, item)}> 
                    { item } 
                </Text>
               < Switch
                    onValueChange = {this.toggleSwitch1}
                    value = {this.state.switch1Value}/>
            </View>
        );
    }
    renderSectionHeader(section) {
        return(
            <Text style={styles.SectionHeaderStyle}> 
                { section.title } 
            </Text>
        );
    }

    render() {
        const A = ['Apple', 'Apricot', 'Avocado'] ;
        const B = ['Banana', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry'] ;
        const C = ['Cherry', 'Coconut'] ;
        return(
            <View style={{ marginTop : (Platform.OS) == 'ios' ? 20 : 0 }}>

                 <SectionList
                    sections={[
                        { title: 'Fruits Name From A', data: A },
                        { title: 'Fruits Name From B', data: B },
                        { title: 'Fruits Name From C', data: C },
                    ]}

                    renderSectionHeader={ ({section}) => this.renderSectionHeader(section) }
                    renderItem={ ({item}) => this.renderSectionItem(item) }
                    keyExtractor={ (item, index) => index }
                    />
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: 'blue'
     },
     SectionHeaderStyle:{
 
        backgroundColor : '#CDDC39',
        fontSize : 20,
        padding: 5,
        color: '#fff',
      },
      SectionListItemStyle:{
        fontSize : 15,
        padding: 5,
        color: '#000',
        backgroundColor : '#F5F5F5'
     
      },
      sectionItemViewStyle: {
        flexDirection: 'row', 
        justifyContent:'space-between',
        paddingRight: 10,
        paddingLeft: 10
      }
}

export default RaarsomeSideMenu;
