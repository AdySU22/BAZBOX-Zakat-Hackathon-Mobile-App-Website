import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    Avatar:{
        marginRight: '10%',
        alignSelf: 'flex-end'
    },
    Exit:{
        alignSelf: 'flex-start',
        marginLeft: '5%'
    },
    Logomid: {
        height: 50,
        width: 50,
        alignSelf: 'center',
        position: 'absolute',
        marginBottom: '30%'
    },
    button: {
        width: '40%',
        height: '7%',
        margin: 10,
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center'
      },
    btntxt:{
        color: 'white',
        fontWeight: 'bold',
    },
    welcome: {
        fontSize: 20,
        marginTop: '40%',
        marginBottom: '15%',
        alignSelf: 'center'
    }
});

const Amil_main = ({navigation}) => {
return(
    <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex:1}}>
                <Image source={require('./imgs/Exit.png')} style={styles.Exit} />
            </View>
            <View style={{flex:1}}>
                <Image source={require('./imgs/BZS_wtxt.png')} style={styles.Logomid} />
            </View>
            <View style={{flex:1}}>
                <Image source={require('./imgs/Avatar.png')} style={styles.Avatar}/>
            </View>
        </View>
        <Text style={styles.welcome}>Selamat Datang!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Amil_infaq')} style={styles.button}><Text style={styles.btntxt}>Infaq</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Amil_bzbx')} style={styles.button}><Text style={styles.btntxt}>BazBox</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mzki_reg')} style={styles.button}><Text style={styles.btntxt}>Registrasi Mustahiq</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Amil_riwayatmthq')} style={styles.button}><Text style={styles.btntxt}>Riwayat Mustahiq</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Amil_veriffg')} style={styles.button}><Text style={styles.btntxt}>Verifikasi Fingerprint</Text></TouchableOpacity>
    </View>
);
};

export default Amil_main
