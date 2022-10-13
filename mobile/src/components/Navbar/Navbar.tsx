import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';



export function NavBar() {
    const navigation = useNavigation();


    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:30, color:'white'}}></Text>
          <StatusBar style="light" />
        </View>
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => navigation.navigate("Pesquisa")} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="search" style={styles.Icon} color='#448aff'/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Allgenda")} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="home" style={styles.Icon} color='#448aff'/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("CadastrarEvento")} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="albums" style={styles.Icon} color='#1e88e5'/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Perfil")} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="person" style={styles.Icon} color='#1565c0'/>
            </Pressable>

            <Pressable onPress={() => navigation.navigate("Ajuda")} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="help" style={styles.Icon} color='#1565c0'/>
            </Pressable>

          </View>

        </View>
        
      </View>
    );
  }