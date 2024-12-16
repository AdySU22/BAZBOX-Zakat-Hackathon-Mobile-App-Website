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

const Mzki_infaqcnf = ({navigation}) => {
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
        <Text style={{fontSize: 24, textAlign: 'center',marginTop: '30%'}}>Selamat! infaq anda{'\n'}berhasil!</Text>
        <Text style={{fontSize: 12, paddingLeft: '5%', textAlign: 'left',marginTop: '5%',backgroundColor: '#D9D9D9',height:'40%',width:'60%',borderRadius: 10,alignSelf: 'center'}}>Nama:...{'\n'}Jam:..{'\n'}Nominal:..{'\n'}Status: terkirim/tidak terkirim{'\n'}Keterangan:..</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mzki_main')} style={{backgroundColor: '#95C2D3', borderRadius:10, borderWidth: 1,padding: 10, alignSelf: 'center',alignItems: 'center',marginTop:'10%',width:'55%',height:'6%'}}><Text style={{fontWeight: 'bold'}}>Dashboard</Text></TouchableOpacity>


</View>
    );
};

export default Mzki_infaqcnf;