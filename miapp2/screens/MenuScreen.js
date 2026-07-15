import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import React,{useState} from 'react';
import TarjetaScreen from './TarjetaScreen';
import SafeAreaScreen from './SafeAreaScreen';
import PressableScreen from './PressableScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import TextInputScreen from './TextInputScreen';
import ImagenBackgroundScreen from './ImagenBackgroundScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';


export default function MenuScreen() {
  
    const[screen,setScreen] = useState('menu');

    switch(screen){
      case 'tarjetas':
        return <TarjetaScreen/>
      case 'safearea':
        return <SafeAreaScreen/>
      case 'pressable':
        return <PressableScreen/>

      case 'activityindicator':
        return <ActivityIndicatorScreen/>

      case 'textinput':
        return<TextInputScreen/>

      case 'flatlist':
         return<FlatListScreen/>

      case 'imagenbackground':
        return<ImagenBackgroundScreen/>
      
      case 'modalscreen':
        return<ModalScreen/>

      case 'menu':
        default:
        return (
          <View style={styles.container}>

             <Text>Menu de practicas: </Text>

             <Button onPress={()=>setScreen('tarjetas')} title="Practica tarjetas" color="#FF6B6B"/>

             <Button onPress={()=>setScreen('safearea')} title="Practica SafeAreaview" color="#0a9e0a"/>

             <Button onPress={()=>setScreen('pressable')} title="Practica Pressable " color="#0a7c9e"/>

             <Button onPress={()=>setScreen('textinput')} title="Practica TextInput" color="#e2eb33"/>

             <Button onPress={()=>setScreen('flatlist')} title="Practica Flatlist" color="#d99619"/>

             <Button onPress={()=>setScreen('imagenbackground')} title="Practica ImagenBackground" color="#db3ba6"/>

             <Button onPress={()=>setScreen('activityindicator')} title="Practica ActivityIndicator" color="#de4014"/>

             <Button onPress={()=>setScreen('modalscreen')} title="Practica Modal" color="#46efb1"/>



             <StatusBar style="auto" />

             </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a6cb',
    marginTop: 80,
    margin: 80,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
});