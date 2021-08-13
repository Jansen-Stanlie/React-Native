/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Button, Input} from 'react-native-elements';
import {View, Text, StyleSheet, SafeAreaView, Alert} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Illustration from './undraw.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  setValue = event => {
    // this.setState({[e.target.name]: e.target.value});
    const name = event.target.name;
    // console.log('asdaxzcvzv', e.target.name);
    console.log(name);
  };
  onButtonPress = () => console.log('asdad', this.state.email);

  render() {
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
              name="email"
              onChangeText={this.setValue}
              value={this.state.email}
              leftIcon={<Icon name="user" size={24} color="black" />}
            />
            <Input
              type="Password"
              placeholder="Password"
              name="password"
              onChangeText={this.setValue}
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
