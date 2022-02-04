import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';


export default function Log() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });

    const [activities, setActivities] = useState({activities:[{title:'Had coffee', timestamp:Date.now(), type:'instantaneous'}]})

    const viewActivities = activities.activities.map((data) => {
        return(
            <TouchableOpacity onPress={()=>navigation.navigate('#')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFFFFF', '#FFF']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <View style={{flexDirection:'row'}}>
                        <View style={{width:15, height:"100%", backgroundColor:data.type=='instantaneous'?"#80FF6C":"#EAFF6C"}}></View>
                    <View style={{marginLeft:'2.5%', paddingVertical:'2.5%'}}><Text style={{fontFamily:'H',fontSize:20,textAlign:'left',color:'#1D4E89'}}>{data.title}</Text>
                    <Text style={{fontFamily:'H',fontSize:12,textAlign:'left',color:'#1D4E89'}}>{data.timestamp}</Text></View>
                    </View>    
                </LinearGradient>
                </TouchableOpacity>
        )});

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <View style={{marginTop:'10%'}}></View>
                <Text style={{fontFamily:'H', fontSize:35, color:"#FFF", lineHeight:35}}>Log</Text>
                <Text style={{fontFamily:'B', fontSize:24, color:"#FFF", marginTop:'5%'}}>View and add activities</Text>
                <View style={{marginTop:'15%', justifyContent:'space-evenly'}}></View>
               



               {viewActivities}


                </View>
                <View style={{position:'absolute', bottom:150, right:50, elevation:3, zIndex:3}}>
                   <TouchableOpacity onPress={()=>navigation.navigate('AddActivity')}><Icon name="pluscircle" type="ant-design" color="#FFF" size={50}></Icon></TouchableOpacity>
               </View>

                <View style={{flexDirection:'row', width:'90%', borderRadius:0, position:'absolute', bottom:20, alignSelf:'center', justifyContent:'space-between', paddingHorizontal:'10%', paddingVertical:'5%'}}>
                    <Icon name="home" type="feather" color="#FFF"></Icon>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Log')}}><Icon name="menu" type="entypo" color="#FFF"></Icon></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{navigation.navigate('Map')}}><Icon name="heart" type="entypo" color="#FFF"></Icon></TouchableOpacity>
                    <Icon name="notifications-outline" type="ionicon" color="#FFF"></Icon>
                    <Icon name="user" type="feather" color="#FFF"></Icon>
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
        width:'15%',
        height:'15%',
        resizeMode:'contain',
        alignSelf:'flex-start',
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
        width:'90%',
        alignSelf:'center',

    },
    btnlabel: {
        fontFamily:'H',
        fontSize:24,
        textAlign:'center',
        color:'#1D4E89'

    },
    btn2: {
        backgroundColor:`rgba(255, 255, 255, 0.1)`,
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'5%',
        paddingHorizontal:'10%',
        borderColor:`rgba(252, 219, 220, 0.5)`,
        borderWidth:2

    },
    btnlabel2: {
        fontFamily:'H',
        fontSize:20,
        textAlign:'center',
        color:'#FFF'

    }

});