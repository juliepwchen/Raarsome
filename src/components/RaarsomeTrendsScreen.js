import React, { PureComponent } from 'react';
import { View } from 'react-native';

import RaarsomeStatusBar from './common/RaarsomeStatusBar';
import RaarsomeD3AreaCharts from './RaarsomeD3AreaCharts';
import RaarsomePieCharts from './RaarsomePieChart';
import RaarsomeLineChart from './RaarsomeLineChart';

class RaarsomeTrendsScreen extends PureComponent {
  
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
  
  render() {
   
      return (
            <View style={styles.viewStyle}>
              <RaarsomeStatusBar />
             
              <RaarsomeLineChart />
              <RaarsomePieCharts />

               
            </View>
      );
    }
}

  const styles = {
    viewStyle: { 
        flex: 1,
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'black'
    }
  }

export default RaarsomeTrendsScreen;