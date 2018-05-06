import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Entypo';

// StackNavigator screens
import RaarsomeHomeScreen from './RaarsomeHomeScreen';
import RaarsomeDetailsScreen from './RaarsomeDetailsScreen';
import RaarsomeTrendsScreen from './RaarsomeTrendsScreen';
import RaarsomeFriendsScreen from './RaarsomeFriendsScreen';
import RaarsomeSideMenu from './RaarsomeSideMenu';
import RaarsomeChartsScreen from './RaarsomeChartsScreen';

// TabNavigator screens
import TabC from './TabC';
import TabA from './TabA';

// Plain old component
import Plain from './Plain'

export const Stack = StackNavigator({
  Home: { screen: TabA },
  Details: { screen: TabC },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    //headerVisible: false,
    headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
    },
    headerTintColor: 'transparent',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: (
      <Icon name='info-with-circle' size={20} color="white" style={ {marginRight: 10}} />
    ),
  }
});

export const Tabs = TabNavigator({
  RaarsomeHomeScreen: { screen: RaarsomeHomeScreen },
  RaarsomeChartsScreen: { screen: RaarsomeChartsScreen },
  RaarsomeTrendsScreen: { screen: RaarsomeTrendsScreen },
}, {
  order: ['RaarsomeHomeScreen', 'RaarsomeChartsScreen', 'RaarsomeTrendsScreen'],
  initialRouteName: 'RaarsomeHomeScreen',
  animationEnabled: false,
  swipeEnabled: true,
  lazyLoad: true,
  tabBarPosition: "bottom",
  //tabBarComponent: RaarsomeSideMenu,
  tabBarOptions: {
    tinColor: 'white',
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    showIcon: true,                   //Required for Android - set to false originally 
    showLabel: false,
    lazyLoad: true,
    upperCaseLabel: false,
    indicatorStyle: {
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: 'transparent',
      //borderTopWidth: 3,
      //borderTopColor: '#996600',
      position: 'absolute',
      zIndex: 100,
      left: 0,
      right: 0,
      bottom: 0
    }
  }
});

const RaarsomeRootNavigation = DrawerNavigator(
  {
    Tabs: { screen: Tabs },
    Stack: { screen: Stack },
    Plain: { screen: Plain },
  },
  {
    contentComponent: RaarsomeSideMenu,
    drawerWidth: 375
  }
);

export default RaarsomeRootNavigation;