import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Main = ({ navigation }) => {
  return (
    <View
      style={styles.container}>
      <Image source={require('./imgs/BZS_wtxt.png')} style = {styles.Image} />
      <Text style={styles.LogAs}>Masuk Sebagai:</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Mzki_log')} style = {styles.button}><Text>Muzakki</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Mthq_log')} style = {styles.button}><Text>Mustahiq</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Amil_log')} style = {styles.button}><Text>Amil</Text></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  LogAs: {
    color: 'white',
    fontWeight: 'bold',
  },
  Image: {
    margin: 50
  },
  button: {
    width: '55%',
    padding: 10,
    margin: 20,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    borderRadius: 10
  }
});
export default Main;
