import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Input, Button} from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";
import { NavBar } from "../../components/Navbar/Navbar";
import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";

export function Evento() {
    const navigate = useNavigation();
    const [tag, setTag] = useState<string>("");
    const [titulo, setTitulo] = useState<string>("");
    const [cor, setCor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [data, setData] = useState<string>("");

    const handleCreateEvento = () => {
        api.post("/evento", {
            tag: tag,
            titulo: titulo,
            cor: cor,
            descricao: descricao,
            dataEvento: data,
            usuarioId: 1 // TODO: pegar o id do usuário logado
        })

        navigate.navigate("Allgenda")
    }
    return(
        <View  style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Cadastrar evento</Text>
                <Input
                    placeholder="tag"
                    leftIcon={{ type: "font-awesome", name: "tag" }}
                    onChangeText={(value) => setTag(value)}
                    keyboardType="default"
                />
                <Input
                    placeholder="#FFFFFF"
                    leftIcon={{ type: "font-awesome", name: "hashtag" }}
                    onChangeText={(value) => setCor(value)}
                    keyboardType="numeric"
                />
                <Input
                    placeholder="titulo"
                    leftIcon={{ type: "font-awesome", name: "pencil" }}
                    onChangeText={(value) => setTitulo(value)}
                    keyboardType="default"
                />
                <Input
                    placeholder="descricao"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    onChangeText={(value) => setDescricao(value)}
                    keyboardType="default"
                />
                <Input
                    placeholder="dataEvento"
                    leftIcon={{ type: "font-awesome", name: "calendar" }}
                    onChangeText={(value) => setData(value)}
                    keyboardType="numeric"
                />

                <Button
                    icon={<Icon name="check" size={15} color="white" />}
                    title="Cadastrar"
                    onPress={() => handleCreateEvento()}
                />
            </View>
            <NavBar/>
        </View>
    )
}