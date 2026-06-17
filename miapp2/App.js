import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Saludo } from './components/Saludo';
import { Saludo2 } from './components/Saludo2';
import { Perfil } from './components/Perfil';

export default function App() {
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