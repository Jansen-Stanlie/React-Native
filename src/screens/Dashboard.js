import React from 'react';
import {View} from 'react-native';

import Button from '../components/Button';
import HeaderWA from '../components/HeaderWA';
import Home from './Home';

export default function Dashboard({navigation}) {
  return (
    <>
      {/* <Logo /> */}
      {/* <Header>Let’s start</Header> */}
      <HeaderWA navigation={navigation} />
      <Home navigation={navigation} />
      {/* <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'StartScreen'}],
          })
        }>
        Logout
      </Button> */}
    </>
  );
}
