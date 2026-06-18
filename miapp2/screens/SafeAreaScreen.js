import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function SafeAreaScreen() {
  return (
    <View style={styles.container}>

        <text> aqui va la practica</text> 

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 300,
    margin: 300,
    backgroundColor: '#c4baba',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
});