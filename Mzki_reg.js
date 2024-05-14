import React from 'react';
import {Text, Alert, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    Image:{
        width: 150,
        height: 150,
        alignSelf: 'center'
    },
    Text:{
        alignSelf: 'center',
        fontSize: 32
    },
    Log_text:{
        marginLeft: '10%',
        marginTop: '5%',
        justifyContent: 'flex-start'
    },
    Input: {
        marginLeft: '5%',
        borderWidth: 1,
        height: '12%',
        width: '90%',
        marginBottom: '5%',
        paddingLeft: 5,
        borderRadius: 5,
        backgroundColor: '#D9D9D9'
    },
    button: {
        alignSelf: 'center',
        width: '55%',
        backgroundColor: '#95C2D3',
        borderRadius: 10
      }
});

const Mzki_reg = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={{height:60}}>
            <Image source={require('./imgs/BZS.png')} style={styles.Image} />
            <Text style={styles.Text}>Registrasi</Text>
            <View style={{flexDirection: 'row'}}>
                <View style={{flex:1}}>
                    <Text style={styles.Log_text}>Nama</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Nama..' />
                    <Text style={styles.Log_text}>Alamat</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Alamat..' />
                    <Text style={styles.Log_text}>Kecamatan</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Kecamatan..' />
                    <Text style={styles.Log_text}>RT/RW</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan RT/RW..' />
                    <Text style={styles.Log_text}>Kata Sandi</Text>
                    <TextInput secureTextEntry={true} style={styles.Input} placeholder='Masukkan Kata Sandi..' />
                </View><View style={{flex:1}}>
                    <Text style={styles.Log_text}>E-Mail</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Email..' />
                    <Text style={styles.Log_text}>Kota</Text>
                    <TextInput style={styles.Input} placeholder='Pilih Kota..' />
                    <Text style={styles.Log_text}>Kelurahan</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Kelurahan..' />
                    <Text style={styles.Log_text}>Kode Pos</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Kode Pos..' />
                    <Text style={styles.Log_text}>Verifikasi Kata Sandi</Text>
                    <TextInput secureTextEntry={true} style={styles.Input} placeholder='Verifikasi Kata Sandi..' />
                </View>
            </View>
        </View>
        <Image source={require('./imgs/Biometric.png')} style={{alignSelf: 'center',marginBottom:'5%',marginTop: '125%'}} />
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style = {styles.button}><Text style={{fontWeight: 'bold', alignSelf:'center',padding:'5%'}}>Registrasi</Text></TouchableOpacity>
        </KeyboardAvoidingView>
    );
};

export default Mzki_reg