import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";
import { EVENTOS } from "../../utils/eventos";
import { EventoCard } from "../../components/EventoCard";

export function Allgenda() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <View style={styles.ads}>
                <Text style={styles.title}>Anúncios</Text>        
            </View> */}
            <View style={styles.eventos}>
                <FlatList
                    data={EVENTOS}
                    keyExtractor={(item) => item.id}
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
        </View>
    )
}