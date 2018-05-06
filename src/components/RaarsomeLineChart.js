import React, { PureComponent } from 'react'
import { LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { Circle, G, Line, Rect, Text } from 'react-native-svg'
import * as shape from 'd3-shape'
import { View } from 'react-native'
import axios from 'axios';

const data = [];

class RaarsomeLineChart extends PureComponent {

    componentWillMount() {
        /* return 'BTC-USD', 'ETH-USD', 'LTC-USD', 'BCH-USD'
        (async () => {
            try {
                let res = await axios.get('https://api-public.sandbox.gdax.com/products')
                //let json = await res.json()
                console.log(res.data.filter((d)=>{
                    return /-USD/.test(d.id);
                }));
            }  catch (e) {
              console.error(e);
            }
        })(); 
        */

       const ws = new WebSocket('wss://ws-feed.gdax.com');

       //open a connection/send a message
        ws.onopen = () => {
            ws.send(JSON.stringify({
                'type': 'subscribe',
                'product_ids': [
                    'BTC-USD',
                    'ETH-USD',
                    'LTC-USD',
                    'BCH-USD'
                ],
                'channels': ['full']
            }));
        };

        //a message was received
        ws.onmessage = (msg) => {
            const { type,
                    time,
                    product_id,
                    size, 
                    price, 
                    side,
                    order_type } = JSON.parse(msg.data);

            //console.log(type);
            //data.push(msg.data);
            //console.log(data);
        };

        //an error occurred
        ws.onerror = (e) => {
        
          //console.log(e.message);
        };

        //connection closed
        ws.onclose = (e) => {
        
          //console.log(e.code, e.reason);
        };
    }

    render() {

        const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const axesSvg = { fontSize: 10, fill: 'white' };
        const verticalContentInset = { top: 10, bottom: 10 }
        const xAxisHeight = 30

        // Layout of an x-axis together with a y-axis is a problem that stems from flexbox.
        // All react-native-svg-charts components support full flexbox and therefore all
        // layout problems should be approached with the mindset "how would I layout regular Views with flex in this way".
        // In order for us to align the axes correctly we must know the height of the x-axis or the width of the x-axis
        // and then displace the other axis with just as many pixels. Simple but manual.

        const HorizontalLine = (({ y }) => (
            <Line
                key={ 'zero-axis' }
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(50) }
                y2={ y(50) }
                stroke={ 'grey' }
                strokeDasharray={ [ 4, 8 ] }
                strokeWidth={ 2 }
            />
        ))
    
        const Tooltip = ({ x, y }) => (
            <G
                x={ x(5) - (75 / 2) }
                key={ 'tooltip' }
                onPress={ () => console.log('tooltip clicked') }
            >
                <G y={ 50 }>
                    <Rect
                        height={ 40 }
                        width={ 75 }
                        stroke={ 'grey' }
                        fill={ 'white' }
                        ry={ 10 }
                        rx={ 10 }
                    />
                    <Text
                        x={ 75 / 2 }
                        dy={20}
                        alignmentBaseline={'middle'}
                        textAnchor={ 'middle' }
                        stroke={ 'rgb(134, 65, 244)' }
                    >
                        { `${data[5]}ºC` }
                    </Text>
                </G>
                <G x={ 75 / 2 }>
                    <Line
                        y1={ 50 + 40 }
                        y2={ y(data[ 5 ]) }
                        stroke={ 'grey' }
                        strokeWidth={ 2 }
                    />
                    <Circle
                        cy={ y(data[ 5 ]) }
                        r={ 6 }
                        stroke={ 'rgb(134, 65, 244)' }
                        strokeWidth={2}
                        fill={ 'white' }
                    />
                </G>
            </G>
        )  

        return (
            <View style={{ height: 290, padding: 20, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    style={{ marginBottom: xAxisHeight }}
                    contentInset={verticalContentInset}
                    svg={axesSvg}
                />
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <LineChart
                        style={{ flex: 1 }}
                        data={data}
                        contentInset={verticalContentInset}
                        svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: 5 }}
                        curve={ shape.curveNatural }
                        extras={ [ HorizontalLine, Tooltip ] }
                    />
                    <XAxis
                        style={{ marginHorizontal: -10, height: xAxisHeight }}
                        data={data}
                        formatLabel={(value, index) => index}
                        contentInset={{ left: 10, right: 10 }}
                        svg={axesSvg}
                    />
                </View>
            </View>
        )
    }

}

export default RaarsomeLineChart;