import React, { useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import logo from "../../assets/logo.png";
import { NavBar } from "../../components/Navbar/Navbar";
const EVENTOS = [
  {
    id: "1",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "2",
    tag: "#GameJamUPE2022",
    titulo: "GameJam UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "3",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "4",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "5",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "6",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
  {
    id: "7",
    tag: "#hackatonUPE2022",
    titulo: "Hackaton UPE 2022",
    descricao:
      "Crie jogos e concorra a prêmios, o evento acontecerá presencialmente e também de maneira híbrida",
    dataEvento: "12/10/2022"
  },
];

const Item = ({tag}:any) => (
  <View style={styles.item}>
    <Text style={styles.tag}>{tag}</Text>
  </View>
);
export default function Perfil() {
    const navigation = useNavigation();
    const renderItem = ({ item }: any) => <Item tag={item.tag} />;

    return (
         <View style={styles.container}>
            <View style={styles.containerForm}>
                <Image source={logo} style={{ width: 305, height: 159 }} />
                <Text style={styles.title}>User</Text>
                <FlatList  data={EVENTOS} renderItem={renderItem} keyExtractor={item => item.id}   />
            </View>
            <NavBar/>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#11b9f5",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    containerForm: {
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      padding: "5%",
    },
    title: {
      alignSelf: "center",
      fontSize: 50,
      fontWeight: "bold",
      marginTop: 20,
      marginBottom: 12,
    },
    text: {
      fontSize: 24,
      marginBottom: 12,
    },
    login: {
      color: "#a1a1a1",
      alignSelf: "center",
    },
    button: {
      position: "absolute",
      backgroundColor: "#fff",
      borderRadius: 50,
      paddingVertical: 8,
      width: "60%",
      alignSelf: "center",
      bottom: "15%",
      alignItems: "center",
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    tag: {
      fontSize: 32,
    },
  });