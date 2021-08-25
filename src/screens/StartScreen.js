import React from 'react';
import Background from '../component/Background';
import Logo from '../component/Logo';
import Header from '../component/Header';
import Button from '../component/Button';
import Paragraph from '../component/Paragraph';

export default function StartScreen({navigation}) {
  return (
    <Background>
      <Logo />
      <Header>HotelApp</Header>
      <Paragraph>
        The easiest way to find Hotel, Indonesia Number one Hotel Application.
      </Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Continue
      </Button>
    </Background>
  );
}
