import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line, Path, Circle } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';



export default function Home() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [calibrated,setCalibrated] = useState(false);
    const [screen, setScreen] = useState(0);
    const [pulse, setPulse] = useState({"pulse":[65,67,76,85,86,54,70,80,85,73]})
    const [health, setHealth] = useState({"length": 12, "gsrraw": ["471", "472", "469", "468", "467", "463", "468", "469", "473", "474", "472"], "gsrdev": ["2",
    "3", "0", "-1", "-2", "-6", "-1", "0", "4", "5", "3"], "time": ["1621201310", "1621201322", "1621205559", "1621205576",
    "1621205583", "1621205598", "1621205634", "1621205639", "1621205644", "1621205644", "1621205659"], "pulse": ["88", "89",
    "93", "91", "92", "90", "91", "91", "91", "87", "88"], "oxygen": ["99", "100", "99", "99", "99", "99", "98", "100",
    "100", "100", "99"], "temperature": ["97.1", "97.1", "97.2", "97.1", "97.0", "97.1", "97.2", "97.0", "97.0", "96.8",
    "96.9"]});

    const _setScreen = (n) => {
       if(n==3){setScreen(0)}
       else{setScreen(n+1)}

    }

    const _getHealthData = () => {
        fetch('https://us-central1-aiot-fit-xlab.cloudfunctions.net/healthchain',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"action":"getchaindata","eid":"4"}),
          })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data),"Data");
            setHealth(data);
            let i=0;
            let arr = [];
            for(i-0;i<data.length;i++){
                arr[i]=parseInt(data.pulse[i]);
            }
            setPulse({"pulse":arr});
            
        });
    }

    useEffect(()=>{
        _getHealthData();

    },[])

   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
             
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>

                
                <View style={{marginTop:'1%'}}></View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{fontFamily:'H', fontSize:35, color:"#FFF", lineHeight:35}}>Personal Stats</Text>
                </View>

                <View style={{marginTop:'5%'}}></View>
                {screen==0&&<View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#63a1eb', "#1D4E89"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#1D4E89",borderRadius:20, borderColor:"#63a1eb", borderWidth:1, width:350, height:500,shadowColor: "#63a1eb",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>Heart Rate</Text>
                    <TouchableOpacity onPress={()=>_setScreen(0)}><Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon></TouchableOpacity>
                    </View>
                    <View style={{marginBottom:'15%'}}></View>
                    <Svg width="350" height="300">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 40,${pulse.pulse[1]}, 80,${pulse.pulse[2]}, 120,${pulse.pulse[3]} S160,${pulse.pulse[4]}, 200 ${pulse.pulse[5]}, S240,${pulse.pulse[6]}, 280,${pulse.pulse[7]}, S320,${pulse.pulse[8]}, 350,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}> BPM</Text></Text>
                    <Image source={require('../assets/pulse.png')} style={{height:70, width:70, resizeMode:'contain', position:'absolute', right:0, bottom:0}}></Image>
                    </View>
                    
                </LinearGradient>
                
                </View>}
                {screen==1&&<View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#63a1eb', "#1D4E89"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#1D4E89",borderRadius:20, borderColor:"#63a1eb", borderWidth:1, width:350, height:500,shadowColor: "#1D4E89",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>Galvanic Skin Response</Text>
                    <TouchableOpacity onPress={()=>_setScreen(1)}><Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon></TouchableOpacity>
                    </View>
                    <View style={{marginBottom:'15%'}}></View>
                    <Svg width="350" height="300">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 40,${pulse.pulse[1]}, 80,${pulse.pulse[2]}, 120,${pulse.pulse[3]} S160,${pulse.pulse[4]}, 200 ${pulse.pulse[5]}, S240,${pulse.pulse[6]}, 280,${pulse.pulse[7]}, S320,${pulse.pulse[8]}, 350,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}></Text></Text>
                    <Image source={require('../assets/gsr.png')} style={{height:50, width:50, resizeMode:'contain', position:'absolute', right:10, bottom:20}}></Image>
                    </View>
                    
                </LinearGradient>
                
                </View>}
                {screen==2&&<View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#63a1eb', "#1D4E89"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#1D4E89",borderRadius:20, borderColor:"#63a1eb", borderWidth:1, width:350, height:500,shadowColor: "#63a1eb",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>Temperature</Text>
                    <TouchableOpacity onPress={()=>_setScreen(2)}><Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon></TouchableOpacity>
                    </View>
                    <View style={{marginBottom:'15%'}}></View>
                    <Svg width="350" height="300">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 40,${pulse.pulse[1]}, 80,${pulse.pulse[2]}, 120,${pulse.pulse[3]} S160,${pulse.pulse[4]}, 200 ${pulse.pulse[5]}, S240,${pulse.pulse[6]}, 280,${pulse.pulse[7]}, S320,${pulse.pulse[8]}, 350,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}></Text></Text>
                    <Image source={require('../assets/temp.png')} style={{height:50, width:50, resizeMode:'contain', position:'absolute', right:10, bottom:20}}></Image>
                    </View>
                    
                </LinearGradient>
                
                </View>}
                {screen==3&&<View style={{flexDirection:'row', height:'42%'}}>
                <LinearGradient
                    colors={[ '#63a1eb', "#1D4E89"]}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={{backgroundColor:"#1D4E89",borderRadius:20, borderColor:"#63a1eb", borderWidth:1, width:350, height:500,shadowColor: "#63a1eb",
                    shadowOffset: {
                        width: 0,
                        height: 6,
                    },
                    shadowOpacity: 0.5,
                    shadowRadius: 10,
                    
                    elevation: 19,}}
                >
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingHorizontal:'5%', paddingTop:'5%'}}>
                    <Text style={styles.title}>ECG</Text>
                    <TouchableOpacity onPress={()=>_setScreen(3)}><Icon name="rightcircle" type="ant-design" color="#FEF3F3"></Icon></TouchableOpacity>
                    </View>
                    <View style={{marginBottom:'15%'}}></View>
                    <Svg width="350" height="300">
                    <Path
                        transform="scale(1, -1) translate(0, -100)"
                        d={`M0 ${pulse.pulse[0]} C 40,${pulse.pulse[1]}, 80,${pulse.pulse[2]}, 120,${pulse.pulse[3]} S160,${pulse.pulse[4]}, 200 ${pulse.pulse[5]}, S240,${pulse.pulse[6]}, 280,${pulse.pulse[7]}, S320,${pulse.pulse[8]}, 350,${pulse.pulse[9]}`}
                        fill="none"
                        stroke="#FFF"
                        strokeLinecap="round"
                        strokeWidth={4}
                    />
                    </Svg>
                    <View style={{paddingHorizontal:'10%', paddingBottom:'5%'}}>
                    <Text style={styles.subtitle}>Normal</Text>
                    <Text style={{fontFamily:'H', fontSize:50, color:"#FFF"}}>{pulse.pulse[9]}<Text style={{color:"#FFD6D6", fontSize:20}}></Text></Text>
                    <Image source={require('../assets/ecg.png')} style={{height:50, width:50, resizeMode:'contain', position:'absolute', right:10, bottom:20}}></Image>
                    </View>
                    
                </LinearGradient>
                
                </View>}
                
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
    },
    avatar: {
        width: 50,
        height:50,
        borderRadius:20,
        resizeMode:'cover',
        position:'absolute',
        right:0,
    },
    calibrate: {
        width:'40%',
        height:'25%',
        resizeMode:'contain',
        alignSelf:'flex-start',
    },
    title: {
        fontFamily:'H',
        fontSize:25,
        textAlign:'left',
        color:'#FFF'
    },
    subtitle: {
        fontFamily:'E',
        color:"#FFD6D6",
        fontSize:20,
        textAlign:'left',
    },
    subtitle2: {
        fontFamily:'E',
        color:"#FF5C5C",
        fontSize:17,
        textAlign:'center',
    },
    btn: {
        backgroundColor:"#F4ACAC",
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        borderRadius:15,
        marginTop:'10%',
        paddingHorizontal:'10%',

    },
    btnlabel: {
        fontFamily:'H',
        fontSize:40,
        textAlign:'center',
        color:'#F04D4E'

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