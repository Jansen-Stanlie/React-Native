import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
} from '../../screens';
import CallScreen from '../../components/WAcomp/CallScreen';
import CallsTab from '../../components/WAcomp/CallsTab';
import ChatsTab from '../../components/WAcomp/ChatsTab';
import ContactsTab from '../../components/WAcomp/ContactsTab';

const Stack = createNativeStackNavigator();
class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="CallsTab" component={CallsTab} />
          <Stack.Screen name="ChatsTab" component={ChatsTab} />
          <Stack.Screen name="Contact" component={ContactsTab} />
          <Stack.Screen
            name="Dashboard"
            children={props => <Dashboard {...props} />}
          />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default Router;
