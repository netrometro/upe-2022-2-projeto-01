import { Text, Button  } from '@rneui/base';
import { StyleSheet } from 'react-native';

export const Home = () => {
    return (
        <>
            <Text style={styles.title}>{"AllGenda! :)"}</Text>
            <Button style={styles.buttonEntrar} title="Entrar" onPress={() => {alert("Logar")}} />
            <Text style={styles.cadastrar} onPress={()=>{alert("Cadastrar")} }>Ainda não é cadastrado? Clique aqui!</Text>
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: 'bold',
    },
    buttonEntrar: {
        padding: 10,
        width: 190,
        border: 1,
        borderColor: '#000',
        borderRadius: 10,
        alignSelf: 'center',
    },
    cadastrar: {
        fontSize: 16,
        alignSelf: 'center',
        marginTop: 10,
        color: '#00008B',
        textDecorationLine: 'underline'
    }
})