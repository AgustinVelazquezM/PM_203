import React from "react";
import { Button, Image, Text, View } from "react-native";

export const Saludo2 = () => {
  return (
    <View>
      <Image
        source={require("../assets/icon.png")}
        style={{ width: 120, height: 120 }}
      />
      <Text>Soy un componente compuesto</Text>
      <Button title="Hola 203" />
    </View>
  );
};