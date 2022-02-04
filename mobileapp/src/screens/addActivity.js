import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { Checkbox } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';



export default function AddActivity() {
    const navigation = useNavigation();
    const [fontLoaded] = useFonts({
        B: require('../assets/fonts/bold.ttf'),
        E: require('../assets/fonts/exbold.ttf'),
        H: require('../assets/fonts/heavy.ttf'),

      });
    const [type, setType] = React.useState('instantaneous');
    const [from, setFrom] = useState(new Date(1598051730000));
    const [to, setTo] = useState(new Date(1598051730000));
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || from;
        setShow(Platform.OS === 'ios');
        setFrom(currentDate);
        console.log(from);
      };

    const onChangeTo = (event, selectedDate) => {
        const currentDate = selectedDate || to;
        setShow(Platform.OS === 'ios');
        setTo(currentDate);
        console.log(to);
      };


   
    if(fontLoaded){
    return (
        <View style={styles.container}>
            <View style={{marginHorizontal:'7.5%', marginTop:'10%'}}>
                <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
                <View style={{marginTop:'5%'}}></View>
                <Text style={{fontFamily:'E', fontSize:35, color:"#FFF", lineHeight:35, width:'90%'}}>Add Activity</Text>
                <View style={{marginTop:'15%', justifyContent:'space-evenly'}}></View>
               

               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:0, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'90%'}}>
                       <Text style={{fontFamily:'E', color:"#FFF"}}>Title</Text>
                       <TextInput placeholder="e.g. had a cup of coffee" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FFF"></TextInput>
                   </View>
               </View>
               <View style={{flexDirection:'row'}}>
               <Checkbox
                status={type=='instantaneous' ? 'checked' : 'unchecked'}
                onPress={() => {
                    setType(type=='instantaneous'?'periodic':'instantaneous');
                }}
                color='#FFF'
                />
                <Text style={{fontFamily:'E', color:"#FFF", textAlignVertical:'center'}}>Instantaneous</Text>
                <Checkbox
                status={type=='periodic' ? 'checked' : 'unchecked'}
                onPress={() => {
                    setType(type=='instantaneous'?'periodic':'instantaneous');
                }}
                color='#FFF'
                />
                <Text style={{fontFamily:'E', color:"#FFF", textAlignVertical:'center'}}>Periodic</Text>
               </View>

                {/* {show && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={from.toString()}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                    />
                )}
                {show2 && (
                    <DateTimePicker
                    testID="dateTimePicker"
                    value={to}
                    mode={'time'}
                    is24Hour={true}
                    display="default"
                    onChange={onChangeTo}
                    />
                )} */}

               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:0, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'90%'}}>
                       <Text style={{fontFamily:'E', color:"#FFF"}}>From</Text>
                       <TextInput placeholder="" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FFF" value={from.toString()}></TextInput>
                   </View>
                   <TouchableOpacity onPress={()=>setShow(!show)}><Icon name="time" type="ionicon" color={`rgba(250, 216, 216, 0.5)`} size={25} style={{textAlign:'right', marginTop:'25%'}}></Icon></TouchableOpacity>
               </View>
               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:0, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'93%'}}>
                       <Text style={{fontFamily:'E', color:"#FFF"}}>To</Text>
                       <TextInput placeholder="" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FFF" value={to.toString()}></TextInput>
                   </View>
                   <TouchableOpacity onPress={()=>setShow2(!show2)}><Icon name="time" type="ionicon" color={`rgba(250, 216, 216, 0.5)`} size={25} style={{textAlign:'right', marginTop:'25%'}}></Icon></TouchableOpacity>
               </View>

               <View style={{marginTop:'5%', backgroundColor:`rgba(252, 219, 220, 0.2)`, borderRadius:0, paddingHorizontal:'5%', paddingVertical:'1.5%', flexDirection:'row'}}>
                   <View style={{width:'90%'}}>
                       <Text style={{fontFamily:'E', color:"#FFF"}}>Reference</Text>
                       <TextInput placeholder="e.g. Rx ID" style={{fontFamily:"B", color:"#FFF", fontSize:20}} placeholderTextColor="#FFF"></TextInput>
                   </View>
               </View>



               <TouchableOpacity onPress={()=>navigation.navigate('Log')}>
                <LinearGradient
                    // Button Linear Gradient
                    colors={['#FFFFFF', '#FFF']}
                    start={[1,-0.3]}
                    end={[1,1]}
                    style={styles.btn}>
                    <Text style={styles.btnlabel}>Continue</Text>
                </LinearGradient>
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
        paddingVertical:'5%',
        width:'90%',
        alignSelf:'center',
        marginTop:'10%',
        paddingHorizontal:'10%',

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