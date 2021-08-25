import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import ListContactScreen from '../screens/ListContactScreen';
import ChatView from '../screens/ChatScreen';
import MainApp from '../screens/MainApp';
import ProfileScreen from '../screens/ProfileScreen';
import StartScreen from '../screens/StartScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();
// const TopTab = createMaterialTopTabNavigator();

// const MainApp = () => {
//   return (
//     <>
//       <TopHeader />
//       <TopTab.Navigator
//         initialRouteName="Chat"
//         screenOptions={{
//           tabBarShowIcon: true,
//           tabBarLabelStyle: {fontSize: 12, color: '#fff'},
//           //   tabBarItemStyle: {width: 100},
//           tabBarStyle: {backgroundColor: '#4B40A4'},
//           tabBarIndicatorStyle: {
//             borderBottomColor: 'white',
//             borderBottomWidth: 2.5,
//           },
//           tabBarPressColor: '#83B0AA',
//         }}>
//         <TopTab.Screen name="Camera" component={Camera} />
//         <TopTab.Screen name="Chat" component={ChatTabScreen} />
//         <TopTab.Screen name="Status" component={StatusTabScreen} />
//         <TopTab.Screen name="Call" component={CallTabScreen} />
//       </TopTab.Navigator>
//     </>
//   );
// };

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ListContact"
          component={ListContactScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatView"
          component={ChatView}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: true,
            headerStyle: {backgroundColor: '#4B40A4'},
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default Router;
