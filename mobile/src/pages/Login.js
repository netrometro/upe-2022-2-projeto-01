import { Text, Input, Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    
    const entrar = () => {
        console.log("entrou")
    }

    return (
        <>
            <Text h1>Entrar</Text>
            <Input
                placeholder="E-mail"
                leftIcon={{type:'font-awesome', name:'envelope'}}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                placeholder="Sua senha"
                leftIcon={{type:'font-awesome', name:'lock'}}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />

            <Button
                icon={
                    <Icon
                        name="check"
                        size={15}
                        color="white"
                    />
                }
                title="Entrar"
                onPress={() => entrar()}
            />
        </>
    )
}

export default Login;