import React, { PureComponent } from 'react'
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';
import * as shape from 'd3-shape'
import { StyleSheet, View } from 'react-native'

class RaarsomePieCharts extends PureComponent {
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

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91 ];

        const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)

        const pieData = data
            .filter(value => value > 0)
            .map((value, index) => ({
                value,
                svg: { fill: randomColor() },
                key: `pie-${index}`,
            }));
       
        return (
            <PieChart
                style={ { height: 300 } }
                data={ pieData }
                innerRadius={ 30 }
                outerRadius={ 100 }
                labelRadius={ 135 }
                renderDecorator={ ({ item, pieCentroid, labelCentroid, index }) => (
                    <G key={ index }>
                        <Line
                            x1={ labelCentroid[ 0 ] }
                            y1={ labelCentroid[ 1 ] }
                            x2={ pieCentroid[ 0 ] }
                            y2={ pieCentroid[ 1 ] }
                            stroke={ item.svg.fill }
                        />
                        <Circle
                            cx={ labelCentroid[ 0 ] }
                            cy={ labelCentroid[ 1 ] }
                            r={ 15 }
                            fill={ item.svg.fill }
                        />
                    </G>
                ) }
            />
        )
    }

}

export default RaarsomePieCharts;