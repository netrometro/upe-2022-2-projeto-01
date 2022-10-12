import React, { useContext } from "react";
import { Input, Button } from "@rneui/base";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import AuthContext from "../../contexts/auth";

function Login() {
  const { signed, signIn } = useContext(AuthContext);
  console.log(signed)
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const entrar = () => {
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerForm}>
        <Text style={styles.text}>Entrar</Text>
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
          title="Entrar"
          onPress={() => entrar()}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.buttonText}>Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
