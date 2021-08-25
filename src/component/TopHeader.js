import React, {Component} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Header} from 'react-native-elements';
import COLOR from '../constants/Color';
import {connect} from 'react-redux';
import {signOut} from '../actions/auth';

const WIDTH = Dimensions.get('window').width;
const anchorSize = 15;
const anchorHyp = Math.sqrt(anchorSize * anchorSize + anchorSize * anchorSize);
export class TopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  clickModalHandler = (visible, command) => {
    const {doLogout, navigation} = this.props;
    this.setState({modalVisible: visible});
    if (command === 'logout') {
      console.log('====================================');
      console.log("logout");
      console.log('====================================');
      // doLogout()
      return navigation.replace('Login');
    } else if (command === 'profile') {
      return navigation.navigate('Profile');
    }
  };

  renderLogout = () => {
    const {modalVisible} = this.state;

    return (
      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                underlayColor={COLOR}
                style={styles.button}
                onPress={() =>
                  this.clickModalHandler(!modalVisible, 'profile')
                }>
                <Text style={styles.textStyle}>Profile</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={COLOR}
                style={styles.button}
                onPress={() => this.clickModalHandler(!modalVisible, 'logout')}>
                <Text style={styles.textStyle}>Logout</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          width: '100%',
          marginBottom: -5,
        }}>
        <Header
          placement="left"
          centerComponent={{text: 'WhatsApp', style: {color: '#fff'}}}
          rightComponent={
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity onPress={() => alert('search')}>
                <Icon
                  name="search"
                  color="#fff"
                  size={20}
                  style={{marginRight: 30, marginBottom: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.clickModalHandler(true)}>
                <Icon
                  name="ellipsis-v"
                  color="#fff"
                  size={22}
                  style={{marginRight: 30, marginBottom: 10}}
                />
              </TouchableOpacity>
              {this.renderLogout()}
            </View>
          }
          backgroundColor="#4B40A4"
        />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(TopHeader);

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    backgroundColor: '#075e54',
    borderColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  logo: {
    fontSize: 23,
    color: '#fff',
    margin: 10,
    fontWeight: '500',
  },
  icons: {
    flexDirection: 'row',
  },
  // centeredView: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: 22
  // },
  modalView: {
    marginLeft: WIDTH * 0.5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
    elevation: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  textStyle: {
    fontSize: 17,
  },
  modalText: {
    marginBottom: 15,
  },
});
