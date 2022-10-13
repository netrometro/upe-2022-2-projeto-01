import React from "react";
import { View, Text } from "react-native";
import { NavBar } from "../../components/Navbar/Navbar";
import { styles } from "./styles";

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como usuar o Allgenda?</Text>
      <Text style={styles.text}>
        O Allgenda é um app que você pode ter acesso a eventos da sua região por
        meio de tags. Ou seja, é um facilitador para você encontrar e participar
        dos eventos cadastrados próximos a você.
      </Text>
      <Text style={styles.text}>
        Você pode cadastrar eventos, buscar eventos pela tag que você possui e
        visualizar a lista de eventos que você está cadastrado.
      </Text>
      <Text style={styles.allgenda}>Allgenda🗓️</Text>
      <NavBar/>
    </View>
  );
}