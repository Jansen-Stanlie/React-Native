/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, FlatList} from 'react-native';
import {
  ThemeProvider,
  ListItem,
  Avatar,
  Button,
  SpeedDial,
} from 'react-native-elements';

import SearchBar from 'react-native-elements/dist/searchbar/SearchBar-ios';
import {SafeAreaProvider} from 'react-native-safe-area-context';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {dataUser: [], refresh: false, limit: 15, page: 1};
  }

  getData = (page = 1) => {
    this.setState({
      refresh: true,
    });

    const {limit} = this.state;
    fetch(
      `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`,
    )
      .then(response => response.json())
      .then(users => {
        let newData = [];
        if (page === 1) {
          newData = users;
        } else {
          newData = [...this.state.dataUser, ...users];
        }
        console.log('datra', users);
        this.setState({
          dataUser: newData,
          page,
          refresh: false,
          open: false,
        });
      });
  };
  delete = id => {
    let copyUser = this.state.dataUser;

    let index = copyUser.findIndex(item => item.id === id);
    copyUser.splice(index, 1);

    this.setState(() => ({
      dataUser: copyUser,
    }));
    console.log('delktewwss', id);
  };

  sendDataUser = item => {
    this.props.navigation.navigate('ContactDetail', item);
  };

  addNew = item => {
    this.props.navigation.navigate('AddNew');
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here ..." />;
  };

  renderItem = ({item}) => {
    const {open} = this.state;
    return (
      <ListItem.Swipeable
        onPress={() => {
          this.sendDataUser(item);
        }}
        leftContent={
          <Button
            title="EDIT"
            icon={{name: 'edit', color: 'white'}}
            buttonStyle={{minHeight: '100%'}}
            // onPress={() => navigation.navigate('Login')}
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{name: 'delete', color: 'white'}}
            buttonStyle={{minHeight: '100%', backgroundColor: 'red'}}
            // onPress={() => console.log(item)}
            onPress={() => this.delete(item.id)}
          />
        }>
        <ListItem.Content>
          <View style={styles.row}>
            {!item.image === '' && (
              <Avatar
                rounded
                style={styles.pic}
                title={item.name.substr(0, 1)}
                titleStyle={{color: 'red'}}
              />
            )}
            {item.image === '' && (
              <Avatar
                rounded
                style={styles.pic}
                title={item.name.substr(0, 1)}
                titleStyle={{color: 'red'}}
              />
            )}
            <Avatar
              rounded
              style={styles.pic}
              title={item.name.substr(0, 1)}
              titleStyle={{color: 'red'}}
            />
            <View>
              <View style={styles.nameContainer}>
                <ListItem.Title
                  style={styles.nameTxt}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {item.name}
                </ListItem.Title>
                <ListItem.Title style={styles.mblTxt}>Mobile</ListItem.Title>
              </View>
              <View style={styles.msgContainer}>
                <ListItem.Subtitle style={styles.msgTxt}>
                  {item.email}
                </ListItem.Subtitle>
              </View>
            </View>
          </View>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };

  componentDidMount() {
    console.log('didmount');
    this.getData();
  }
  setOpen = e => {
    this.setState({
      open: e,
    });
  };
  render() {
    const {open} = this.state;
    console.log('assdsd', this.state.dataUser);
    return (
      <SafeAreaProvider>
        <ThemeProvider>
          <View style={{flex: 1}}>
            <FlatList
              data={this.state.dataUser}
              keyExtractor={(item, idx) => idx}
              renderItem={this.renderItem}
              onRefresh={() => this.getData(1)}
              refreshing={this.state.refresh}
              onEndReached={() => this.getData(this.state.page + 1)}
              onEndReachedThreshold={0.6}
              ListHeaderComponent={this.renderHeader}
            />
            <SpeedDial
              isOpen={open}
              icon={{name: 'add', color: '#fff'}}
              openIcon={{name: 'close', color: '#fff'}}
              onOpen={() => this.setOpen(!open)}
              onClose={() => this.setOpen(!open)}>
              <SpeedDial.Action
                icon={{name: 'add', color: '#fff'}}
                title="Add"
                onPress={() => console.log('Add Something')}
              />
              <SpeedDial.Action
                icon={{name: 'delete', color: '#fff'}}
                title="Delete"
                onPress={() => console.log('Delete Something')}
              />
            </SpeedDial>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.nameTxt} onPress={this.props.logoutHandler}>
                LOGOUT
              </Text>
              <Text style={styles.nameTxt} onPress={this.addNew}>
                addnew
              </Text>
            </TouchableOpacity>
            <TouchableOpacity />
          </View>
        </ThemeProvider>
      </SafeAreaProvider>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
});
export default Home;
