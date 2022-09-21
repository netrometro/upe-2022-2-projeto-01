import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles"

export default function Inicio() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Allgenda🗓️</Text>
        <Text style={styles.text}>
          Busque por eventos em sua região ou em qualquer lugar!
        </Text>
        <Text style={styles.login}>Faça o login para começar</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}