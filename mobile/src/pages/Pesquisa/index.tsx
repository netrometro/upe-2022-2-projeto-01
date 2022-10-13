import React, { Fragment, useEffect, useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { Input } from "@rneui/base";
import { NavBar } from "../../components/Navbar/Navbar";

const USERS=[
    {
        id: "1",
        email: "JOAO@GMAIL.COM",
        senha: "123456",
        nome: "João",
        apelido: "Joãozinho",
        avatar: "https://avatars.githubusercontent.com/u/54643525?v=4",
        eventos : []
    },
    {
        id: "2",
        email: "jarbas@gmail.com",
        senha: "123456",
        nome: "Jarbas",
        apelido: "Jarbas",
        avatar: "https://avatars.githubusercontent.com/u/54643525?v=4",
        eventos : []
    },
    {
        id: "3",
        email: "gisele@gmail.com",
        senha: "123456",
        nome: "Gisele",
        apelido: "Gisele",
        avatar: "https://avatars.githubusercontent.com/u/54643525?v=4",
        eventos : []
    }
];

export default function Pesquisa() {
 
    const [text, onChangeText] = React.useState('');
    const [usersFiltered, setUsersFiltered] = useState<object[]>([]);
    const filteredUsers = () => {
        const _userdFiltered = USERS.filter((user) => user.apelido===text);
        console.log(_userdFiltered);
        setUsersFiltered(_userdFiltered);
    }
    useEffect(() => {
        filteredUsers();
    }, [text]);

    return (
        <View style={styles.container}>
          <View style={styles.containerForm}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="pesquisar"
            />
          </View>
          {usersFiltered.length > 0 ? (
            <View style={styles.containerForm}>
            {usersFiltered.map((user:any) => (
                <Fragment key={user.id}>
                <Text style={styles.text}>apelido: {user.apelido}</Text>
                <Text style={styles.text}>nome: {user.nome}</Text>
                </Fragment>
            ))}
            </View>  
          ):(
            <View style={styles.containerForm}>
            {USERS.map((user) => (
                <Fragment key={user.id}>
                <Text style={styles.text}>apelido: {user.apelido}</Text>
                <Text style={styles.text}>nome: {user.nome}</Text>
                </Fragment>
            ))}
            </View>  
          )}
          <NavBar/>
        </View>
      );
}    