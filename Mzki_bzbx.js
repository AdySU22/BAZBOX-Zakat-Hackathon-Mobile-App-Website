import React from 'react';
import {Text, Image, TextInput, TouchableOpacity, StyleSheet, View} from 'react-native';
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
    header:{
        fontSize: 30,
        color: 'white',
        borderWidth: 1,
        marginTop: '20%',
        marginBottom: '10%',
        paddingLeft: 90,
        backgroundColor: 'green',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 10
    },
    header2:{
        fontSize: 28,
        color: 'white',
        borderWidth: 1,
        marginTop: '7%',
        marginBottom: '7%',
        paddingLeft: 50,
        backgroundColor: 'green',
        width: '60%',
        alignSelf: 'center',
        borderRadius: 10
    },
    button: {
        width: '55%',
        marginTop: '10%',
        padding: 10,
        margin: 20,
        backgroundColor: '#95C2D3',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10
      },
    labels:{
        marginLeft: '20%',
        fontSize: 18
    },
    Inputs:{
        marginLeft: '20%',
        borderWidth: 1,
        height: '5%',
        width: '60%',
        marginBottom: '3%',
        paddingLeft: 5,
        borderRadius: 5,
        backgroundColor: '#D9D9D9'
    },
});

const Mzki_bzbx = ({navigation}) => {
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
    <Text style={styles.header}>Tunai</Text>
    <Text style={styles.labels}>Nominal</Text>
    <TextInput keyboardType='numeric' placeholder='Tulis Nominal..' style={styles.Inputs}/>
    <Text style={styles.header2}>Non - Tunai</Text>
    <Text style={{backgroundColor:'#D9D9D9', alignSelf: 'center',fontSize:24,fontWeight: 'bold',width: '50%',borderRadius:10,paddingLeft: 70}}>Beras</Text>
    <Text style={styles.labels}>Berat</Text>
    <TextInput keyboardType='numeric' placeholder='XX KG' style={styles.Inputs}/>
    <Text style={styles.labels}>Lainnya</Text>
    <TextInput placeholder='Ex, Sembako, Gula, Minyak' style={styles.Inputs}/>
    <Text style={styles.labels}>Berat</Text>
    <TextInput keyboardType='numeric' placeholder='XX KG' style={styles.Inputs}/>
    <TouchableOpacity onPress={() => navigation.navigate('Mzki_bzbxcnf')} style={styles.button}><Text style={{fontWeight: 'bold'}}>Konfirmasi</Text></TouchableOpacity>
</View>
);
};

export default Mzki_bzbx;