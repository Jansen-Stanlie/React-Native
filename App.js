/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Input, ListItem} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Illustration from './undraw.svg';
import CallAPIVanilla from './Pages/CallApiAxios';
import Home from './screen/Home';
const Stack = createNativeStackNavigator();
function Test() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red',
        alignItems: 'center',
      }}>
      <Text>Makan</Text>
    </View>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loginStat: false,
    };
  }

  onButtonPress = () => {
    const email = 'jansen@gmail.com';
    const password = 'Jansen@2410';
    if (email === this.state.email && password === this.state.password) {
      Alert.alert('Success', 'silahkan masuk');
      return this.setState({
        loginStat: true,
      });
    }
    return Alert.alert('Failed', 'silahkan keluar');
  };

  render() {
    if (this.state.loginStat) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="About">
            <Stack.Screen name="Login" component={CallAPIVanilla} />
            <Stack.Screen name="About" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <SafeAreaProvider>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <View style={{flex: 2}}>
            <Text style={styles.title}>Please Login</Text>
            <Illustration width={354} height={125} margin={20} />
            <Input
              type="text"
              placeholder="Username"
              // errorMessage={this.state.errorUsername}
              onChangeText={value => this.setState({email: value})}
              value={this.state.email}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              type="Password"
              placeholder="Password"
              name="password"
              onChangeText={value => this.setState({password: value})}
              secureTextEntry={true}
              leftIcon={<Icon name="key" size={24} color="black" />}
            />
            <Button title="Login" type="outline" onPress={this.onButtonPress} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  button1: {
    backgroundColor: 'grey',
    fontSize: 20,
    borderRadius: 4,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    alignItems: 'center',
  },
});
export default App;
