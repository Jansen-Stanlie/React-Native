/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Java from '../../assets/image/Java.png';
const Product = props => {
  return (
    <View>
      <View style={styles.wrapper}>
        <Image source={Java} style={styles.imageProduct} />
        <Text style={styles.productName}>Java Wallpaper 2021</Text>
        <Text style={styles.productPrice}>Rp. 25.000.0000</Text>
        <Text style={styles.location}>Medan Kota</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
          <View style={styles.wrapperButton}>
            <Text style={styles.buttonName}>BELI</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginTop: 40,
    marginLeft: 20,
  },
  wrapper: {
    padding: 12,
    backgroundColor: '#F2F2F2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 107, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#F2994A',
    marginTop: 12,
  },
  location: {
    fontSize: 12,
    fontWeight: '300',
    marginTop: 12,
  },
  wrapperButton: {
    backgroundColor: '#6FCF97',
    paddingVertical: 6,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonName: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
