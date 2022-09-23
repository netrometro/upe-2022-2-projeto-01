import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { useNavigation } from "@react-navigation/native";

export function Allgenda() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.ads}>
                <Text style={styles.title}>Anúncios</Text>        
            </View>

            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.navigate("Anúncio")}
            >
                <Text style={styles.buttonText}> Cadastrar anúncio </Text>
            </TouchableOpacity>
        </View>
    )
}