/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

export class ProfileScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4B40A4',
          }}>
          <Avatar
            rounded
            size={200}
            source={{
              // uri: this.props.userLogin.image,
              uri: 'https://avatars.githubusercontent.com/u/81914393?v=4',
            }}
          />
        </View>
        <View
          style={{
            height: 50,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignContent: 'center',
            paddingLeft: 20,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            marginTop: -20,
            flex: 0.5,
          }}>
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text> {this.props.userLogin.name} </Text>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text> {this.props.userLogin.username} </Text>
          </View>

          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <Text> {this.props.userLogin.noHandphone} </Text>
          </View>
          <View
            style={{
              height: 50,
              backgroundColor: 'white',
              justifyContent: 'center',
              paddingLeft: 20,
            }}>
            <TouchableOpacity
              style={styles.buttonSocmed}
              // onPress={this.onButtonPressedSocmed
            >
              <Icon name="edit" size={35} color="#FCA60B" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonSocmed: {
    borderWidth: 1.5,
    borderColor: '#4B40A4',
    width: 300,
    // backgroundColor: '#4B40A4',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = state => ({
  userLogin: state.auth.userLogin,
});

export default connect(mapStateToProps, null)(ProfileScreen);
