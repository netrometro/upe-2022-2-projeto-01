import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';
import Cadastro from './src/pages/Cadastro';
import { Home } from './src/pages/Home';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Cadastro/>
      <Login/> */}
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
