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

const Amil_bzbxfinal = ({navigation}) => {
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
        <Text style={{fontSize: 24, textAlign: 'center',marginTop: '50%'}}>Terima kasih!{'\n'}Anda telah mengambil zakat anda</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Amil_main')} style={{backgroundColor: '#95C2D3', borderRadius:10, borderWidth: 1,padding: 10, alignSelf: 'center',alignItems: 'center',marginTop:'40%',width:'55%',height:'10%'}}><Text style={{fontWeight: 'bold'}}>Dashboard</Text></TouchableOpacity>


</View>
    );
};

export default Amil_bzbxfinal;