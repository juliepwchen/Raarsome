import React, { PureComponent } from 'react';
import { View } from 'react-native';
import ChartView from 'react-native-highcharts';

import RaarsomeStatusBar from './common/RaarsomeStatusBar';
import RaarsomeD3AreaCharts from './RaarsomeD3AreaCharts';
import RaarsomePieCharts from './RaarsomePieChart';

import Orientation from 'react-native-orientation';

class RaarsomeChartsScreen extends PureComponent {
  //static navigationOptions = {
    //header: { visible: true },
    //title: '',
  //};
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

  componentWillMount() {
    // The getOrientation method is async. It happens sometimes that
    // you need the orientation at the moment the JS runtime starts running on device.
    // `getInitialOrientation` returns directly because its a constant set at the
    // beginning of the JS runtime.

    const initial = Orientation.getInitialOrientation();
    if (initial === 'PORTRAIT') {
        //Orientation.lockToLandscape();
    } else {
      // do something else
    }
  }

  componentDidMount() {
    // this locks the view to Portrait Mode
    //Orientation.lockToPortrait();

    // this locks the view to Landscape Mode
    //Orientation.lockToLandscape();

    // this unlocks any previous locks to all Orientations
    //Orientation.unlockAllOrientations();

    Orientation.addOrientationListener(this._orientationDidChange);
  }

  _orientationDidChange = (orientation) => {
    if (orientation === 'LANDSCAPE') {
      // do something with landscape layout
    } else {
        //Orientation.lockToPortrait();
    }
  }

  componentWillUnmount() {
    Orientation.getOrientation((err, orientation) => {
      console.log(`Current Device Orientation: ${orientation}`);
    });


    // Remember to remove listener
    Orientation.removeOrientationListener(this._orientationDidChange);
  }

  
  render() {
    Highcharts='Highcharts';
    conf={
              chart: {
                  type: 'spline',
                  animation: Highcharts.svg, // don't animate in old IE
                  marginRight: 10,
                  events: {
                      load: function () {
  
                          // set up the updating of the chart each second
                          var series = this.series[0];
                          setInterval(function () {
                              var x = (new Date()).getTime(), // current time
                                  y = Math.random();
                                  series.addPoint([x, y], true, true);
                          }, 1000);
                      }
                  },
                  backgroundColor: {
                    linearGradient: [0, 0, 500, 500],
                    stops: [
                        [0, '#2583C2'],
                        [1, '#A6CEE8']
                    ]
                  },
              },
              title: {
                  text: 'Live random data',
                  style: {
                    color: 'white',
                    font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                  }
              },
              xAxis: {
                  type: 'datetime',
                  tickPixelInterval: 100,
                  plotLines: [{
                    value: 0,
                    width: 1,
                    color: 'white'
                  }],
                  labels: {
                    style: {
                        color: 'white',
                        font: '10px "Trebuchet MS", Verdana, sans-serif'
                      }
                  }
              },
              yAxis: {
                  title: {
                      text: 'Day',
                      style: {
                        color: 'white',
                        font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
                      }
                  },
                  //plotBands: [{
                    //color: 'black', // Color value
                    //from: 0, // Start of the plot band
                    //to: 4 // End of the plot band
                  //}],
                  plotLines: [{
                      value: 0,
                      width: 1,
                      color: 'white'
                  }],
                  labels: {
                    style: {
                        color: 'white',
                        font: '10px "Trebuchet MS", Verdana, sans-serif'
                      }
                  }
              },
              tooltip: {
                  formatter: function () {
                      return '<b>' + this.series.name + '</b><br/>' +
                          Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                          Highcharts.numberFormat(this.y, 2);
                  }
              },
              legend: {
                  enabled: false
              },
              exporting: {
                  enabled: false
              },
              series: [{
                  name: 'Random data',
                  data: (function () {
                      // generate an array of random data
                      var data = [],
                          time = (new Date()).getTime(),
                          i;
  
                      for (i = -19; i <= 0; i += 1) {
                          data.push({
                              x: time + i * 1000,
                              y: Math.random()
                          });
                      }
                      return data;
                  }()),
                  color: 'deeppink'
              }]
      };
  
      options = {
              global: {
                  useUTC: false
              },
              lang: {
                  decimalPoint: ',',
                  thousandsSep: '.'
              }
      };
      return (
            <View style={styles.viewStyle}>
              <RaarsomeStatusBar />
              <ChartView style={styles.chartViewStyle} config={conf} options={options}></ChartView>
            </View>
      );
    }
}

  const styles = {
    chartViewStyle: {
        paddingTop: 5,
        height:330,
    },
    viewStyle: { 
        flex: 1,
        paddingTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: 'black'
    },
  }

export default RaarsomeChartsScreen;