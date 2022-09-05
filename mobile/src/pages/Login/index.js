import {Input, Button } from '@rneui/base';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native'

function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    
    const entrar = () => {
        console.log("entrou")
    }

    return (
        <View style={styles.container}>
            <View style = {styles.containerForm}>
                <Text style={styles.text}>Entrar</Text>
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
            </View>
            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Cadastro')}
            >
                <Text style={styles.buttonText}>Cadastre-se</Text>
            </TouchableOpacity>
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
    button: {
        position: 'absolute',
        backgroundColor: "#fff",
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: "center",
        bottom: '15%',
        alignItems: "center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default Login;