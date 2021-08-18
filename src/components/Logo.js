import React from 'react';
import {Image, StyleSheet} from 'react-native';
import Illustration from '../assets/undraw.svg';
export default function Logo() {
  return <Illustration width={354} height={125} margin={20} />;
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
});
