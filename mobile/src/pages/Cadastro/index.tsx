import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { styles } from "./styles";
import { View, Text } from "react-native";
import api from "../../services/api";

function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeated, setPasswordRepeated] = useState<string>("");

  function handleCreateUser() {
    api.post("/register", {
        nome: "Gabriel Rodrigues",
        email: email,
        senha: password,
        apelido: "teste",
        avatar: "https://avatars2.githubusercontent.com/u/589998?s=460&v=4"
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Cadastrar</Text>
        <Input
          placeholder="Nome"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setEmail(value)}
          keyboardType="email-address"
        />

        <Input
          placeholder="Apelido"
          leftIcon={{ type: "font-awesome", name: "user" }}
          onChangeText={(value) => setEmail(value)}
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
