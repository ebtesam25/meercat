import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


export default function Welcome() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <View style={{marginTop:'60%'}}></View>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <Text style={{fontFamily:'H', fontSize:40, color:"#FFF", textAlign:'center'}}>MEERCAT</Text>
                <Text style={{fontFamily:'B', fontSize:18,  color:"#FFF", textAlign:'center'}}>Medication Efficacy Evaluation using Realtime physiologiCal Assessment and Transcription</Text>
                <View style={{marginTop:'15%'}}></View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFF', '#FFF']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.btnlabel}>Login to an existing account</Text>
                    <Icon name="arrowright" type="antdesign" color="#53599A" style={{textAlign:'right'}}></Icon>
                    </View>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                <View style={styles.btn2}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={styles.btnlabel2}>Create a new account</Text>
                    <Icon name="arrowright" type="ant-design" color="#FFF" style={{textAlign:'right'}}></Icon>
                    </View>
                </View>
                </TouchableOpacity>

                </View>
            
        </View>
    );

}
else{
    return(<View></View>)
}
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#1D4E89',
    },
    logo: {
        width:'10%',
        height:'10%',
        resizeMode:'contain',
        alignSelf:'center',
    },
    title: {
        fontFamily:'H',
        color:"#FFF",
        fontSize:20,
        textAlign:'center',
        color:'#F04D4E'
    },
    subtitle: {
        fontFamily:'B',
        color:"#FFF",
        fontSize:17,
        textAlign:'center',
        marginTop:'50%',
        width:'40%',
        alignSelf:'center'
    },
    btn: {
        backgroundColor:"#F4ACAC",
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        marginTop:'10%',
        paddingHorizontal:'10%',

    },
    btnlabel: {
        fontFamily:'H',
        fontSize:15,
        textAlign:'left',
        color:'#1D4E89'

    },
    btn2: {
        backgroundColor:'#1D4E89',
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:0,
        marginTop:'5%',
        paddingHorizontal:'10%',
        borderColor:'#FFF',
        borderWidth:2

    },
    btnlabel2: {
        fontFamily:'H',
        fontSize:16,
        textAlign:'left',
        color:'#FFF'

    }

});