import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';

import { NavigationContainer} from '@react-navigation/native';
import Routes from './src/routes';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#11b9f5" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
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
