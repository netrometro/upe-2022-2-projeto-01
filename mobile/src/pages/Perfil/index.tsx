import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import logo from "../../assets/logo.png";
export default function Perfil() {
    const navigation = useNavigation();
    
    return (
         <View style={styles.container}>
            <View style={styles.containerForm}>
            {/* <Image source={logo} style={{ width: 305, height: 159 }} /> */}
                <Text style={styles.title}>Nome do user</Text>
                <Text style={styles.text}>
                    Descrição do usuario!
                </Text>
                <Text style={styles.login}></Text>
            </View>
   
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Cadastro")}
            >
                <Text style={styles.buttonText}>Editar perfil</Text>
            </TouchableOpacity>
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
  });
  