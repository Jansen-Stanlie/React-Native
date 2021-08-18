import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Java from '../../assets/image/Java.png';
const Cart = props => {
  return (
    <View>
      <View style={styles.javaWrapper}>
        <Image source={Java} style={styles.iconJava} />
        <Text style={styles.notif}>{props.quantity}</Text>
      </View>
      <Text style={styles.text}>Materi Positioning Gambar java</Text>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  javaWrapper: {
    borderWidth: 1,
    borderColor: '#4398D1',
    width: 93,
    height: 93,
    borderRadius: 93 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconJava: {width: 50, height: 50},
  text: {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
  notif: {
    fontSize: 12,
    color: 'white',
    backgroundColor: '#6FCF97',
    padding: 4,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 5,
    right: 0,
  },
});
