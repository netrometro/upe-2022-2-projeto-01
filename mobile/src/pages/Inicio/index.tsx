import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import {useNavigation} from '@react-navigation/native'

export default function Inicio() {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            
            <View style = {styles.containerForm}>
                <Text style={styles.title}>Allgenda🗓️</Text>
                <Text style={styles.text}>Busque por eventos em sua região ou em qualquer lugar!</Text>
                <Text style={styles.login}>Faça o login para começar</Text>
            </View>

            <TouchableOpacity 
            style={styles.button}
            onPress={ () => navigation.navigate('Login')}
            >
                <Text style={styles.buttonText}>Acessar</Text>
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
        padding: '5%'
    },
    title:{
        alignSelf: "center",
        fontSize: 50,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 12
    },
    text:{
        fontSize: 24,
        marginBottom: 12
    },
    login:{
        color:'#a1a1a1',
        alignSelf: "center"
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