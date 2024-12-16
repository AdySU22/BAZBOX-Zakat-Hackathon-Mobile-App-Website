import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
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
    }
});

const Mthq_infaqcnf = ({navigation}) => {
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
        <Text style={{fontSize: 24, textAlign: 'center',marginTop: '20%'}}>Selamat! permintaan anda{'\n'}berhasil dikonfirmasi!</Text>
        <Text style={{fontSize: 24, textAlign: 'center',marginTop: '10%'}}>Berikut Kode Autentikasi{'\n'}untuk BazBox</Text>
        <Text style={{fontSize: 24, textAlign: 'center',marginTop: '5%',backgroundColor: '#D9D9D9',width:'60%',borderRadius: 10,alignSelf: 'center'}}>12DJ239XQE974</Text>
        <Text style={{fontSize: 12, textAlign: 'center',fontWeight: 'bold'}}>*Kode diatas hanya berlaku untuk 2{'\n'}jam dari sekarang.</Text>
        <Text style={{fontSize: 14, textAlign: 'left',marginLeft: '20%',marginTop: '10%'}}>Ket:{'\n'}Alamat BazBox ada pada kelurahan yang{'\n'}anda daftarkan saat melakukan{'\n'}pendaftaran</Text>
        <Text style={{fontSize: 18, textAlign: 'left',marginLeft: '20%',marginTop: '10%'}}>Status</Text>
        <Text style={{fontSize: 18, textAlign: 'center',backgroundColor: '#D9D9D9',width:'65%',borderRadius: 10,alignSelf: 'center'}}>Telah diambil/Belum diambil</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mthq_infaqfinal')} style={{backgroundColor: '#95C2D3', borderRadius:10, borderWidth: 1,padding: 10, alignSelf: 'center',alignItems: 'center',marginTop:'10%',width:'55%',height:'7%'}}><Text style={{fontWeight: 'bold'}}>Selanjutnya</Text></TouchableOpacity>


</View>
    );
};

export default Mthq_infaqcnf;