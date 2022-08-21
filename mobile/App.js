import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

var iconHeight = 26;
var iconWidth = 26;


export default class App extends React.Component {

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
});
