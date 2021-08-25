import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TopHeader} from './../component/TopHeader';
import Camera from './Camera';
import ChatTabScreen from './ChatTabScreen';
import StatusTabScreen from './StatusTabScreen';
import CallTabScreen from './CallTabScreen';
import {ProfileScreen} from './ProfileScreen';

const TopTab = createMaterialTopTabNavigator();

export class MainApp extends Component {
  render() {
    return (
      <>
        <TopHeader {...this.props} />
        <TopTab.Navigator
          //   tabBar={props => <TopHeader {...props} />}
          initialRouteName="Chat"
          screenOptions={{
            tabBarShowIcon: true,
            tabBarLabelStyle: {fontSize: 12, color: '#fff'},
            //   tabBarItemStyle: {width: 100},
            tabBarStyle: {backgroundColor: '#4B40A4'},
            tabBarIndicatorStyle: {
              borderBottomColor: 'white',
              borderBottomWidth: 2.5,
            },
            tabBarPressColor: '#83B0AA',
          }}>
          <TopTab.Screen name="Camera" component={Camera} />
          <TopTab.Screen name="Chat" component={ChatTabScreen} />
          <TopTab.Screen name="Status" component={StatusTabScreen} />
          <TopTab.Screen name="Call" component={CallTabScreen} />
          {/* <TopTab.Screen name="Profile" component={ProfileScreen} /> */}
        </TopTab.Navigator>
      </>
    );
  }
}

export default MainApp;
