import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Alert,
  Button,
  StyleSheet,
  Platform,
  Switch,
} from "react-native";

if (Platform.OS === "web") {
  Alert.alert = (titulo, mensaje, botones) => {
    if (Array.isArray(mensaje)) {
      botones = mensaje;
      mensaje = "";
    }

    if (botones) {
      if (window.confirm(`${titulo}\n${mensaje}`)) {
        botones.find((b) => b.onPress)?.onPress();
      }
    } else {
      window.alert(`${titulo}\n${mensaje}`);
    }
  };
}

export default function Registroeu() {
  const [nombre, setNombre] = useState("");
  const [carrera, setCarrera] = useState("");
  const [semestre, setSemestre] = useState("");

  const [taller, setTaller] = useState(false);
  const [constancia, setConstancia] = useState(false);
  const [deportes, setDeportes] = useState(false);

  const registro = () => {
    // Validar campos vacíos
    if (
      nombre.trim() === "" ||
      carrera.trim() === "" ||
      semestre.trim() === ""
    ) {
      Alert.alert(
        "Faltan datos",
        "No se permiten TextInput vacíos."
      );
      return;
    }

    // Validar semestre numérico
    if (!/^[0-9]+$/.test(semestre)) {
      Alert.alert(
        "Semestre inválido",
        "El semestre debe ser numérico."
      );
      return;
    }

    Alert.alert(
      "Confirmar registro",
      "¿Desea enviar el registro?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Sí",
          onPress: () => {
            Alert.alert(
              "Registro realizado",
              `Nombre: ${nombre}

Carrera: ${carrera}

Semestre: ${semestre}

Taller: ${taller ? "Sí" : "No"}

Constancia: ${constancia ? "Sí" : "No"}

Deportes: ${deportes ? "Sí" : "No"}`
            );
          },
        },
      ]
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>
          Registro de Evento Universitario
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ingrese su nombre completo"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingrese su carrera"
          placeholderTextColor="#999"
          autoCapitalize="words"
          value={carrera}
          onChangeText={setCarrera}
        />

        <TextInput
          style={styles.input}
          placeholder="Ingrese su semestre"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={semestre}
          onChangeText={setSemestre}
        />

        <Text style={styles.subtitulo}>Opciones</Text>

        <View style={styles.opcion}>
          <Text style={styles.texto}>
            ¿Asistirá al taller?
          </Text>

          <Switch
            value={taller}
            onValueChange={setTaller}
          />
        </View>

        <View style={styles.opcion}>
          <Text style={styles.texto}>
            ¿Requiere constancia?
          </Text>

          <Switch
            value={constancia}
            onValueChange={setConstancia}
          />
        </View>

        <View style={styles.opcion}>
          <Text style={styles.texto}>
            ¿Participará en actividades deportivas?
          </Text>

          <Switch
            value={deportes}
            onValueChange={setDeportes}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Button
            title="Enviar Registro"
            onPress={registro}
            color="#1976D2"
          />
        </View>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 20,
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },

  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  subtitulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },

  opcion: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  texto: {
    fontSize: 17,
    flex: 1,
  },
});