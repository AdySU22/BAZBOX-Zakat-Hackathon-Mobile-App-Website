import React from 'react';
import {Text, KeyboardAvoidingView, Image, TextInput, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

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
        fontSize: 24,
        textAlign: 'center'
    },
    Log_text:{
        marginLeft: '5%',
        justifyContent: 'flex-start'
    },
    Input: {
        marginLeft: '5%',
        borderWidth: 1,
        marginBottom: 8,
        height: '40%',
        width: '90%',
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

const Amin_veriffg = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <View style={{height:60}}>
            <Image source={require('./imgs/BZS.png')} style={styles.Image} />
            <Text style={styles.Text}>Silahkan melakukan{'\n'}verifikasi</Text>
                    <Text style={styles.Log_text}>Nama</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Nama..' />
                    <Text style={styles.Log_text}>NPPZ</Text>
                    <TextInput maxLength={15} keyboardType='numeric' style={styles.Input} placeholder='Masukkan NPPZ..' />
                    <Text style={styles.Log_text}>Jenis Penerimaan</Text>
                    <TextInput style={styles.Input} placeholder='Masukkan Jenis Penerimaan..' />
                    <TextInput keyboardType='numeric' style={styles.Input} placeholder='Beras (zakat fitrah)..' />
                    <TextInput keyboardType='numeric' style={styles.Input} placeholder='Tunai (zakat mal)..' />
                    <TextInput keyboardType='numeric' style={styles.Input} placeholder='Infaq - Masukkan Jumlah..' />
                    <TextInput style={styles.Input} placeholder='Masukkan Jenis Sedekah' />
                    <Text onPress={() => navigation.navigate('Mzki_reg')} style={{fontWeight: 'bold',marginLeft:'5%',marginBottom:'10%'}}>Belum terdaftar? Daftar</Text>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('Amil_veriffinal')}>
                    <Image source={require('./imgs/Biometric.png')} style={{alignSelf: 'center',marginBottom:'5%'}} />
                    </TouchableWithoutFeedback>
        </View>
       </KeyboardAvoidingView>
    );
};

export default Amin_veriffg;