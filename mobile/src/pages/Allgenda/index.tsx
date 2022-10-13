import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { EVENTOS } from "../../utils/eventos";
import { EventoCard } from "../../components/EventoCard";
import { NavBar } from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import api from "../../services/api";

export function Allgenda() {
    const [eventos, setEventos] = useState([]);
    const navigation = useNavigation();
    useEffect(() => {
        api.get("/eventos").then((response) => {
            setEventos(response.data);
        })
    })
    return (
        <View style={styles.container}>
            {/* <View style={styles.ads}>
                <Text style={styles.title}>Anúncios</Text>        
            </View> */}
            <View style={styles.eventos}>
                <FlatList
                    data={eventos}
                    renderItem={({ item }) => (
                        <EventoCard data={item}/>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.contentList}
                >

                </FlatList>
            </View>
            

            <TouchableOpacity 
                style={styles.buttonEntrar}
                // onPress={() => navigation.navigate("ROTA")}
            >
                <Text style={styles.buttonText}> Entrar em evento</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.buttonCadastrar}
                onPress={() => navigation.navigate("CadastrarEvento")}
            >
                <Text style={styles.buttonText}> Cadastrar Evento</Text>
            </TouchableOpacity>
            <NavBar/>
        </View>
    )
}