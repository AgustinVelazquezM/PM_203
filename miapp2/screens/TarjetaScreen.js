import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Perfil } from '../components/Perfil';

export default function TarjetaScreen() {
  return (
    <View style={styles.container}>
      
      <Perfil
        estiloExt = {styles.tarjetaroja}
        nombre="Agustin Velazquez Martinez"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

      <Perfil 
        estiloExt = {styles.tarjetaverde}
        nombre="Agustin Velazquez Martinez"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

       <Perfil 
        estiloExt = {styles.tarjetaroja}
        nombre="Agustin Velazquez Martinez"
        carrera="Ingeniería en Sistemas"
        materia="Programación Móvil"
        cuatrimestre="9°"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },

  tarjetaroja: {
    backgroundColor: '#FF6B6B',
  },

  tarjetaverde: {
    backgroundColor: '#0a9e0a',
  },
});