import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

SplashScreen.preventAutoHideAsync().catch(() => { });

export default function LibroScreen() {
  const [cargandoInicial, setCargandoInicial] = useState(true);
  const [guardando, setGuardando] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [libros, setLibros] = useState([]);

  const temporizadorGuardado = useRef(null);

  useEffect(() => {
    const temporizadorInicio = setTimeout(async () => {
      setCargandoInicial(false);
      await SplashScreen.hideAsync().catch(() => { });
    }, 10000);

    return () => {
      clearTimeout(temporizadorInicio);
      clearTimeout(temporizadorGuardado.current);
    };
  }, []);

  const mostrarAlerta = (encabezado, mensaje) => {
    if (Platform.OS === "web") {
      window.alert(`${encabezado}\n\n${mensaje}`);
    } else {
      Alert.alert(encabezado, mensaje);
    }
  };

  const agregarLibro = () => {
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      mostrarAlerta("Campos incompletos", "Todos los campos son obligatorios.");
      return;
    }

    setGuardando(true);

    temporizadorGuardado.current = setTimeout(() => {
      const nuevoLibro = {
        id: `${Date.now()}-${Math.random()}`,
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };

      setLibros((librosActuales) => [nuevoLibro, ...librosActuales]);

      setTitulo("");
      setAutor("");
      setGenero("");
      setGuardando(false);

      mostrarAlerta("Libro agregado", "Libro guardado correctamente.");
    }, 4000);
  };

  if (cargandoInicial) {
    return (
      <SafeAreaView style={styles.bienvenida}>
        <Text style={styles.icono}>🌎</Text>
        <Text style={styles.libroIcono}>📖</Text>
        <Text style={styles.bienvenidaTexto}>Registro de libros</Text>
        <ActivityIndicator
          size="large"
          color="#2563eb"
          style={styles.indicadorInicio}
        />
        <StatusBar style="dark" />
      </SafeAreaView>
    );
  }

  return (
    <ImageBackground
      source={require('../assets/Aot.png')}
      style={styles.fondo}
      resizeMode="cover"
    >
      <View style={styles.capaOscura}>
        <SafeAreaView style={styles.safeArea}>
          <KeyboardAvoidingView
            style={styles.contenedor}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <FlatList
              data={libros}
              keyExtractor={(item) => item.id}
              keyboardShouldPersistTaps="handled"
              contentContainerStyle={styles.lista}
              ListHeaderComponent={
                <>
                  <Text style={styles.tituloPrincipal}>
                    Catálogo de Libros
                  </Text>

                  <TextInput
                    style={styles.input}
                    placeholder="Título del libro"
                    placeholderTextColor="#666"
                    value={titulo}
                    onChangeText={setTitulo}
                    editable={!guardando}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Autor"
                    placeholderTextColor="#666"
                    value={autor}
                    onChangeText={setAutor}
                    editable={!guardando}
                  />

                  <TextInput
                    style={styles.input}
                    placeholder="Género"
                    placeholderTextColor="#666"
                    value={genero}
                    onChangeText={setGenero}
                    editable={!guardando}
                  />

                  <Pressable
                    style={({ pressed }) => [
                      styles.boton,
                      (pressed || guardando) && styles.botonDesactivado,
                    ]}
                    onPress={agregarLibro}
                    disabled={guardando}
                  >
                    {guardando ? (
                      <View style={styles.guardandoFila}>
                        <ActivityIndicator size="small" color="#ffffff" />
                        <Text style={styles.botonTexto}>Guardando...</Text>
                      </View>
                    ) : (
                      <Text style={styles.botonTexto}>Agregar Libro</Text>
                    )}
                  </Pressable>

                  {guardando && (
                    <View style={styles.indicadorGuardado}>
                      <ActivityIndicator size="large" color="#ffffff" />
                      <Text style={styles.guardandoTexto}>
                        Guardando libro...
                      </Text>
                    </View>
                  )}

                  <Text style={styles.total}>
                    Total de libros: {libros.length}
                  </Text>
                </>
              }
              ListEmptyComponent={
                <Text style={styles.listaVacia}>
                  Todavía no hay libros registrados.
                </Text>
              }
              renderItem={({ item }) => (
                <View style={styles.tarjetaLibro}>
                  <Text style={styles.tituloLibro}>{item.titulo}</Text>
                  <Text style={styles.detalleLibro}>Autor: {item.autor}</Text>
                  <Text style={styles.detalleLibro}>Género: {item.genero}</Text>
                </View>
              )}
            />
          </KeyboardAvoidingView>

          <StatusBar style="light" />
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bienvenida: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f0ff",
  },

  icono: {
    fontSize: 75,
  },

  libroIcono: {
    fontSize: 65,
    marginTop: -8,
  },

  bienvenidaTexto: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "800",
    color: "#5b21b6",
    letterSpacing: 1,
  },

  indicadorInicio: {
    marginTop: 25,
  },

  fondo: {
    flex: 1,
  },

  capaOscura: {
    flex: 1,
    backgroundColor: "rgba(20,20,35,0.60)",
  },

  safeArea: {
    flex: 1,
  },

  contenedor: {
    flex: 1,
  },

  lista: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 45,
  },

  tituloPrincipal: {
    fontSize: 30,
    fontWeight: "900",
    textAlign: "center",
    color: "#f8fafc",
    marginBottom: 28,
    letterSpacing: 1,
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.96)",
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#c4b5fd",
    paddingHorizontal: 18,
    paddingVertical: 15,
    marginBottom: 16,
    fontSize: 16,
    color: "#312e81",
  },

  boton: {
    backgroundColor: "#7c3aed",
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 6,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  botonDesactivado: {
    backgroundColor: "#9ca3af",
  },

  botonTexto: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "700",
    letterSpacing: 0.5,
  },

  guardandoFila: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  indicadorGuardado: {
    marginVertical: 28,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 15,
    borderRadius: 18,
  },

  guardandoTexto: {
    color: "#ffffff",
    fontSize: 17,
    marginTop: 12,
    fontWeight: "700",
  },

  total: {
    marginTop: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "#facc15",
    fontSize: 18,
    fontWeight: "800",
  },

  listaVacia: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    backgroundColor: "rgba(255,255,255,0.15)",
    padding: 20,
    borderRadius: 18,
    fontStyle: "italic",
  },

  tarjetaLibro: {
    backgroundColor: "#ffffff",
    borderLeftWidth: 6,
    borderLeftColor: "#7c3aed",
    borderRadius: 18,
    padding: 18,
    marginBottom: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.18,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  tituloLibro: {
    fontSize: 20,
    fontWeight: "800",
    color: "#4c1d95",
    marginBottom: 8,
  },

  detalleLibro: {
    fontSize: 15,
    color: "#475569",
    marginBottom: 5,
    lineHeight: 22,
  },
});