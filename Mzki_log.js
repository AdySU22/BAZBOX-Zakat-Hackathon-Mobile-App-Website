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
        color: 'white',
        fontWeight: 'bold',
        marginLeft: '20%'
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

const Mzki_log = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={{height:60}}>
        <Image source={require('./imgs/BZS_wtxt.png')} style={styles.Image} />
        <Text style={styles.Text}>Nama</Text>
        <TextInput placeholder="Masukkan Nama.." style={styles.Input} />
        <Text style={styles.Text}>NPWZ</Text>
        <TextInput keyboardType='numeric' maxLength={15} placeholder="Masukkan NPWZ.." style={styles.Input} />
        <Text style={styles.Text}>Kata Sandi</Text>
        <TextInput placeholder="Masukkan Kata Sandi.." secureTextEntry={true} style={styles.Input} />
        <Text onPress={() => navigation.navigate('Forgot_pass')} style={{marginTop:'-3%',marginLeft: '20%', color: 'white', fontWeight: 'bold'}}>Lupa Kata Sandi?</Text>
        <Text onPress={() => navigation.navigate('Mzki_reg')} style={{alignSelf:'center', color: 'black', fontWeight: 'bold',marginTop: '5%'}}>Belum Memiliki Akun</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mzki_main')} style = {styles.button}><Text style={{fontWeight:'bold'}}>MASUK</Text></TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
};

export default Mzki_log