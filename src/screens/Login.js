/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

import {signIn} from './../actions/auth';
import SQLiteContext from './../config/sqlLite/sqlLiteContext';
import Illustration from '../assets/Hotel.svg';
import {theme} from '../core/theme';

class LoginConn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorUsername: '',
      errorPassword: '',
      visible: true,
      userLists: [],
    };
  }

  getUserList = () => {
    this.props.sqlite
      .getAllUsers('SELECT * FROM user')
      .then(userList => {
        this.setState({
          userLists: userList,
        });
      })
      .catch(err => {
        console.log('error get ALL users: ', err);
      });
  };

  componentDidMount() {
    this.getUserList();
  }

  onButtonPressedSocmed = () => {
    Alert.alert('Under Maintenance', 'Mohon Bersabar');
  };
  onRegistered = () => {
    const {userList, doLogin, navigation} = this.props;
    return navigation.replace('Register');
  };
  onButtonPressed = () => {
    const {username, password, userLists} = this.state;
    const {userList, doLogin, navigation} = this.props;

    if (username === '' && password === '') {
      return this.setState({
        errorUsername: 'Invalid username',
        errorPassword: 'Invalid password',
      });
    }

    if (username === '') {
      return this.setState({
        errorUsername: 'Invalid username',
      });
    }
    if (password === '') {
      return this.setState({
        errorPassword: 'Invalid password',
      });
    }

    for (let i = 0; i < userList.length; i++) {
      console.log(userList[i]);
      if (
        username === userList[i].username &&
        password === userList[i].password
      ) {
        doLogin(userList[i]);
        // console.log('data login', userList[i]);
        return navigation.replace('MainApp');
      }
    }

    return Alert.alert('Wrong', 'Salah Input Username atau Password');
  };

  renderVisibleButton = () => {
    if (this.state.visible) {
      return (
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
          onPress={() => this.setState({visible: false})}>
          <Icon name="eye" size={20} color="#FCA60B" />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity
          style={{
            marginRight: 20,
          }}
          onPress={() => this.setState({visible: true})}>
          <Icon name="eye-slash" size={20} color="#FCA60B" />
        </TouchableOpacity>
      );
    }
  };

  render() {
    console.log('====================================');
    console.log('username', this.state.username);
    console.log('password', this.state.password);
    console.log('user list', this.state.userLists);
    console.log('====================================');
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Illustration width={354} height={200} marginTop={50} />
          <Text
            style={{
              fontSize: 26,
              marginBottom: 50,
              marginTop: 20,
              color: theme.colors.primary,
            }}>
            Login
          </Text>
        </View>

        <View
        // style={styles.containerInput}
        >
          <Input
            onChangeText={username =>
              this.setState({username, errorUsername: ''})
            }
            errorMessage={this.state.errorUsername}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="Username"
            leftIcon={<Icon name="user" size={20} color="grey" />}
          />
        </View>
        <View
        // style={styles.containerInput}
        >
          <Input
            onChangeText={password =>
              this.setState({password, errorPassword: ''})
            }
            errorMessage={this.state.errorPassword}
            inputContainerStyle={styles.inputContainerStyle}
            placeholder="Password"
            secureTextEntry={this.state.visible}
            leftIcon={<Icon name="unlock-alt" size={20} color="grey" />}
            rightIcon={this.renderVisibleButton}
          />
        </View>
        <View style={styles.containerInput}>
          <TouchableOpacity
            style={styles.button}
            onPress={this.onButtonPressed}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerInput}>
          <Text style={{textAlign: 'center', color: 'grey'}}>Or</Text>
        </View>
        <View style={styles.containerInputSocmed}>
          <TouchableOpacity
            style={styles.buttonSocmed}
            onPress={this.onButtonPressedSocmed}>
            <Icon name="google" size={25} color="#FCA60B" />
          </TouchableOpacity>
          {/* </View>
            <View style={styles.containerInput}> */}
          <TouchableOpacity
            style={styles.buttonSocmed}
            onPress={this.onRegistered}>
            <Icon name="registered" size={25} color="#FCA60B" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1.5,
    borderColor: '#4B40A4',
    width: '100%',
    // backgroundColor: '#4B40A4',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#4B40A4',
    fontSize: 20,
    // textAlign: 'center',
  },
  containerInput: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  containerInputSocmed: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    paddingLeft: 20,
    backgroundColor: 'white',
    shadowColor: '#4B40A4',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonSocmed: {
    borderWidth: 1.5,
    borderColor: '#4B40A4',
    width: 170,
    // backgroundColor: '#4B40A4',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Login extends Component {
  render() {
    return (
      <SQLiteContext.Consumer>
        {sqlite => <LoginConn {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.auth.userList,
});

const mapDispatchToProps = dispatch => ({
  doLogin: data => dispatch(signIn(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
