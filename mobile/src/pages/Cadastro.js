import { Text, Input, Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';

function Cadastro() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordRepeated, setPasswordRepeated] = useState(null)
    
    const cadastrar = () => {
        console.log("cadastrou")
    }

    return (
        <>
            <Text h1>Cadastrar</Text>
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

            <Input
                placeholder="Repita sua senha"
                leftIcon={{type:'font-awesome', name:'lock'}}
                onChangeText={value => setPasswordRepeated(value)}
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
                title="Cadastrar"
                onPress={() => cadastrar()}
            />
        </>
    )    
}

export default Cadastro