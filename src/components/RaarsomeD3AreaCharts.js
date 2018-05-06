import React from 'react'
import { AreaChart, XAxis, YAxis, LineChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import { StyleSheet, View } from 'react-native'

class RaarsomeD3AreaCharts extends React.PureComponent {
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

        const data  = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
        const data2 = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ].reverse()

        const contentInset = { top: 20, bottom: 20 }
        return (
            <View style={ { height: 290, flexDirection: 'row' } }>
              
                    <YAxis
                    data={data}
                    contentInset={ contentInset }
                    svg={{
                        fill: 'white',
                        fontSize: 10,
                    }}
                    formatLabel={ value => `${value}ºC` }
                    />
                  
                <AreaChart
                    style={ { flex: 1, paddingLeft: 20 } }
                    data={ data }
                    svg={{ fill: 'rgba(134, 65, 244, 0.5)' }}
                    contentInset={ { top: 10, bottom: 10 } }
                    curve={ shape.curveNatural }
                    showGrid
                />
              
                <AreaChart
                    style={ StyleSheet.absoluteFill }
                    data={ data2 }
                    svg={{ fill: 'rgba(34, 128, 176, 0.5)' }}
                    contentInset={ { top: 10, bottom: 10 } }
                    curve={ shape.curveNatural }
                    showGrid
                />
               
            </View>
        )
    }

}

export default RaarsomeD3AreaCharts;