import { View, Text, Touchable, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function Allgenda() {
    return (
        <View style={styles.container}>
            <View style={styles.ads}>
                <Text style={styles.title}>Anúncios</Text>        
            </View>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Cadastrar anúncio</Text>
            </TouchableOpacity>
        </View>
    )
}