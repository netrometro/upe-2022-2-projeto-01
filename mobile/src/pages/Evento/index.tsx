import { View, Text, TouchableOpacity } from "react-native";
import { Input, Button} from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./styles";

export function Evento() {
    return(
        <View  style={styles.container}>
            <View style={styles.containerForm}>
                <Text style={styles.text}>Cadastrar evento</Text>
                <Input
                    placeholder="tag"
                    leftIcon={{ type: "font-awesome", name: "tag" }}
                    // onChangeText={usestate}
                    keyboardType="default"
                />
                <Input
                    placeholder="cor"
                    leftIcon={{ type: "font-awesome", name: "hashtag" }}
                    // onChangeText={usestate}
                    keyboardType="numeric"
                />
                <Input
                    placeholder="titulo"
                    leftIcon={{ type: "font-awesome", name: "pencil" }}
                    // onChangeText={usestate}
                    keyboardType="default"
                />
                <Input
                    placeholder="descricao"
                    leftIcon={{ type: "font-awesome", name: "envelope" }}
                    // onChangeText={usestate}
                    keyboardType="default"
                />
                <Input
                    placeholder="dataEvento"
                    leftIcon={{ type: "font-awesome", name: "calendar" }}
                    // onChangeText={usestate}
                    keyboardType="numeric"
                />

                <Button
                    icon={<Icon name="check" size={15} color="white" />}
                    title="Cadastrar"
                    // onPress={() => handleCreateEvento()}
                />
            </View>
        </View>
    )
}