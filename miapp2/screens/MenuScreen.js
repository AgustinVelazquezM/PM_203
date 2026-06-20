import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';


export default function MenuScreen() {
  
    const[screen,setScreen] = useState('menu');

    switch(screen){
      case 'tarjetas':
        return <TarjetaScreen/>
      case 'safearea':
        return <SafeAreaScreen/>
      case 'pressable':
        return <PressableScreen/>

      case 'menu':
        default:
        return (
          <View style={styles.container}>

             <text>Menu de practicas: </text>

             <Button onPress={()=>setScreen('tarjetas')} title="Practica tarjetas" color="#FF6B6B"/>

             <Button onPress={()=>setScreen('safearea')} title="Practica SafeAreaview" color="#0a9e0a"/>

             <Button onPress={()=>setScreen('pressable')} title="Practica Pressable " color="#0a7c9e"/>

             <Button onPress={()=>setScreen('Textinput')} title="Practica Textinput" color="#e2eb33"/>

             <Button onPress={()=>setScreen('Flatlist')} title="Practica Flatlist" color="#d99619"/>

             <Button onPress={()=>setScreen('ImagenBackground')} title="Practica ImagenBackground" color="#db3ba6"/>

             <Button onPress={()=>setScreen('Activityindicator')} title="Practica ActivityIndicator" color="#de4014"/>

             <Button onPress={()=>setScreen('Modal')} title="Practica Modal" color="#46efb1"/>



             <StatusBar style="auto" />

             </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdb1b1',
    marginTop: 60,
    margin: 60,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
});