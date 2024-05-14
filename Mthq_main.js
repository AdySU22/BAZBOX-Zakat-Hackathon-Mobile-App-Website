import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Text: {
        marginTop: '50%',
        marginBottom: '10%',
        fontSize: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    },
    Textntc: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: '20%',
        margin: '5%',
        fontSize: 30,
        textAlign: 'center'
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center',
        width: '50%',
        height: '2%',
        padding: 10,
        margin: 10,
        backgroundColor: 'green',
        alignItems: 'center',
        borderRadius: 10,
      },
    btntxt:{
        color: 'white',
        fontSize: 15
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
    }
});

const Mthq_main = ({navigation}) => {
    return(
        <ScrollView>
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
        <Text style={styles.Text}>Selamat Datang!{'\n'}{'\n'}Silahkan pilih zakat yang anda ingin ambil</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Mthq_infaq')} style={styles.button}><Text style={styles.btntxt}>Infaq/Sedekah</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Mthq_infaq')} style={styles.button}><Text style={styles.btntxt}>BazBox</Text></TouchableOpacity>
        <Text style={styles.Textntc}>Riwayat Penerimaan Zakat</Text>
        <Image source={require('./imgs/Riwayat.png')} style={{alignSelf:'center'}}/>
        </View></ScrollView>
    );
};

export default Mthq_main