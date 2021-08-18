import React from 'react';
import {View} from 'react-native';
// import Background from '../components/Background';
// import Logo from '../components/Logo';
// import Header from '../components/Header';
// import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import HeaderWA from '../components/HeaderWA';
import Home from './Home';
export default function Dashboard({navigation}) {
  return (
    <View>
      {/* <Logo /> */}
      {/* <Header>Let’s start</Header> */}
      <HeaderWA />
      {/* <Paragraph>
        Your amazing app starts here. Open you favorite code editor and start
        editing this project.
      </Paragraph> */}
      {/* <Home /> */}
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          })
        }>
        Logout
      </Button>
    </View>
  );
}
