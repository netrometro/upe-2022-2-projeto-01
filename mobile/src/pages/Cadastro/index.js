import {Input, Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

function Cadastro() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [passwordRepeated, setPasswordRepeated] = useState(null)
    
    const cadastrar = () => {
        console.log("cadastrou")
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
                    onPress={() => cadastrar()}
                />
            </View>
        </View>

    )    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#11b9f5',
        flex:1,
        justifyContent: "center",
        alignItems: "center",        
    },
    containerForm:{
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        padding: '5%',
        width: '80%'
    },
    text:{
        fontSize: 30,
        marginBottom: 12,
        alignSelf:'center'
    },
})

export default Cadastro