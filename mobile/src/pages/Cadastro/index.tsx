import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../services/api";

function Cadastro() {
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [nome, setNome] = useState<string>("");
  const [apelido, setApelido] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleCreateUser() {
    api.post("/register", {
        nome: nome,
        email: email,
        senha: password,
        apelido: apelido,
        avatar: ""
    })
    navigation.navigate("Login")
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Cadastrar</Text>
        <Input
          placeholder="Nome"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setNome(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Apelido"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setApelido(value)}
          keyboardType="email-address"
        />

        <Input
            placeholder="E-mail"
            leftIcon={{ type: "font-awesome", name: "envelope" }}
            onChangeText={(value) => setEmail(value)}
            keyboardType="email-address"
        />

        <Input
          placeholder="Sua senha"
          leftIcon={{ type: "font-awesome", name: "lock" }}
          onChangeText={(value) => setPassword(value)}
          secureTextEntry={true}
        />

        <Button
          icon={<Icon name="check" size={15} color="white" />}
          title="Cadastrar"
          onPress={() => handleCreateUser()}
        />
      </View>
    </View>
  );
}

export default Cadastro;
