import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';

const LocalAPi = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}> Local API (JSON Server)</Text>
      <Text>Masukkan Anggota Kabayan Coding</Text>
      <TextInput placeholder="Nama Lengkap" style={styles.input} />
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Bidang" style={styles.input} />
      <View>
        <Image source={'sss'} />
        <View>
          <Text>Nama Lengkap</Text>
          <Text>Email</Text>
          <Text>Bidang</Text>
        </View>
      </View>
    </View>
  );
};

export default LocalAPi;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center', marginBottom: 20},
  line: {height: 2, backgroundColor: 'black', marginVertical: 20},
  input: {borderWidth: 1, marginBottom: 12, borderRadius: 12},
});
