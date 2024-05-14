import React from 'react';
import {Text, Alert, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        
    },
    Image: {
        margin: 10,
        alignSelf: 'center'
    },
    Text: {
        color: 'black',
        borderRadius: 10,
        backgroundColor: '#FFD233',
        marginBottom: '10%',
        padding: 10,
        height: 40,
        fontWeight: 'bold',
        width: '50%',
        alignSelf: 'center',
        textAlign: 'center',
    },
    Input: {
        borderWidth: 1,
        margin: 5,
        height: '55%',
        marginLeft: '20%',
        marginBottom: '5%',
        paddingLeft: 5,
        borderRadius: 5,
        width: '60%',
        backgroundColor: '#D9D9D9'
    },
    button: {
        width: '50%',
        height: '70%',
        padding: 10,
        margin: 10,
        backgroundColor: '#D9D9D9',
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'center'
      }
});

const Forgot_pass = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={{height:60}}>
        <Image source={require('./imgs/BZS_wtxt.png')} style={styles.Image} />
        <Text style={styles.Text}>Lupa Kata Sandi</Text>
        <TextInput placeholder="Masukkan Email Anda" style={styles.Input} />
        <TouchableOpacity onPress={() => alert('Verifikasi Kata Sandi Dikirim!')} style = {styles.button}><Text style={{fontWeight:'bold'}}>Konfirmasi</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
};

export default Forgot_pass;