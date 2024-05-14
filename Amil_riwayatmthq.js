import React from 'react';
import {Text, ScrollView, Image, TouchableOpacity, StyleSheet, View} from 'react-native';
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

const Amil_riwayatmthq = ({navigation}) => {
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
        <Text style={{fontSize: 26, textAlign: 'center',marginTop: '15%'}}>Data Mustahiq</Text>
        <Text style={{fontSize: 14, textAlign: 'center',marginBottom: '10%'}}>*Per Waktu Distribusi</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft:'20%',marginBottom: 5}}>Total Penerimaan</Text>
        <Image source={require('./imgs/Data_mthq.png')} style={{alignSelf: 'center'}} />
        <Image source={require('./imgs/Distribusi_zakat.png')} style={{alignSelf: 'center', marginTop: '20%'}} />
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft:'20%',marginBottom: 5,marginTop:'5%'}}>Zakat Belum Terdistribusi</Text>
        <Image source={require('./imgs/Stock_zakat.png')} style={{alignSelf: 'center'}} />
        <TouchableOpacity onPress={() => navigation.navigate('Amil_main')} style={{backgroundColor: '#95C2D3', borderRadius:10, borderWidth: 1,padding: 10, alignSelf: 'center',alignItems: 'center',marginTop:'30%',marginBottom:'5%',width:'55%',height:'4%'}}><Text style={{fontWeight: 'bold'}}>Dashboard</Text></TouchableOpacity>

</View></ScrollView>
    );
};

export default Amil_riwayatmthq;