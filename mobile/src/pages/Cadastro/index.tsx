import {Input, Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import { styles } from './styles'
import {
    View,
    Text,
} from 'react-native';

function Cadastro() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordRepeated, setPasswordRepeated] = useState<string>('')
    
    function handleCreateUser() {
        console.log(email)
        console.log(password)
    }

    return (
        <View style={styles.container}>
            <View style = {styles.containerForm}>
                <Text style={styles.text}>Cadastrar</Text>
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
                    onPress={() => handleCreateUser()}
                />
            </View>
        </View>

    )    
}

export default Cadastro