import React, {useEffect, useState, Component} from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {ThemeProvider, Header, ListItem, Avatar} from 'react-native-elements';
import Axios from 'axios';
import {ScrollView} from 'react-native';

class CallAPIVanilla extends Component {
  constructor(props) {
    super(props);
    this.state = {dataUser: []};
  }
  componentDidMount() {
    console.log('didmount');
    this.getData();
  }
  getData = () => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(json => {
        console.log('json:', json);
        this.setState({
          dataUser: json.data,
        });
      });
  };
  // postData = () => {
  //   const dataForAPI = {
  //     name: 'morpheuss',
  //     job: 'leader',
  //   };
  //   Axios.post('https://reqres.in/api/users', dataForAPI)
  //     .then(res => {
  //       // setDataJob(res.data);
  //     })
  //     .catch(err => console.log('error: ', err));
  // };

  render() {
    console.log('data user', this.state.dataUser);
    return (
      <ScrollView>
        <View style={styles.textTitle}>
          {/* <Header
          placement="center"
          leftComponent={{icon: 'menu', color: '#fff'}}
          centerComponent={{text: 'CONTACT LIST', style: {color: '#fff'}}}
          rightComponent={{icon: 'home', color: '#fff'}}
        /> */}

          {/* <Button title="GET DATA" onPress={this.getData} /> */}
          {this.state.dataUser.map((data, i) => (
            <ListItem key={i}>
              <Avatar source={{uri: data.avatar}} style={styles.avatar} />
              <ListItem.Content>
                <Text>{`${data.first_name} ${data.last_name}`}</Text>
                <Text>{`${data.email}`}</Text>
              </ListItem.Content>
            </ListItem>
          ))}

          <View style={styles.line} />
          {/* <Button title="POST DATA" onPress={postData} />
        <Text>Response POST DATA</Text>
        <Text>{dataJob.name}</Text>
        <Text>{dataJob.job}</Text> */}
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  avatar: {width: 100, height: 100, borderRadius: 50},
});
export default CallAPIVanilla;
