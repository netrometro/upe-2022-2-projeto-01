import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var iconHeight = 26;
var iconWidth = 26;


export default class NavBar extends React.Component {

  state = {
    screenText: 'Aperte um botão!'
  }
  
  changeText = (text) => {
    console.log(text +'foi pressionado')
    this.setState({
      screenText: text
    })
  }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{fontSize:30, color:'white'}}>{this.state.screenText}</Text>
          <StatusBar style="light" />
        </View>
        <View style={styles.NavContainer}>
          <View style={styles.NavBar}>
            <Pressable onPress={() => this.changeText('Eventos favoritos')} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="heart" height={iconHeight} width={iconWidth} color='#448aff'/>
            </Pressable>

            <Pressable onPress={() => this.changeText('Homepage')} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="home" height={iconHeight} width={iconWidth} color='#448aff'/>
            </Pressable>

            <Pressable onPress={() => this.changeText('Meus eventos')} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="albums" height={iconHeight} width={iconWidth} color='#1e88e5'/>
            </Pressable>

            <Pressable onPress={() => this.changeText('Perfil de usuario')} style={styles.IconComportamento}
            android_ripple={{borderless:true, radius:50}}>
              <Icon name="person" height={iconHeight} width={iconWidth} color='#1565c0'/>
            </Pressable>

          </View>

        </View>
        
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3962FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  NavContainer: {
    position:'absolute',
    alignItems: 'center',
    bottom: 20,
  },

  NavBar: {
    flexDirection: 'row',
    backgroundColor:'#eee',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius:40
  },

  IconComportamento: {
    padding: 14
  }
});