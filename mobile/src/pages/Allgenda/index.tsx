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
            <FlatList
                data={EVENTOS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <EventoCard data={item}/>
                )}
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.contentList}
            >

            </FlatList>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("CadastrarEvento")}
            >
                <Text style={styles.buttonText}> Cadastrar Evento</Text>
            </TouchableOpacity>
        </View>
    )
}