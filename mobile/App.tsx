import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {Routes} from "./src/routes";
import { Background } from "./src/components/Background";
import { AuthProvider } from './src/contexts/auth';

export default function App() {

  return (
    <NavigationContainer>
      <AuthProvider>
        <Background>
          <StatusBar backgroundColor="#11b9f5" barStyle="light-content" />
          <Routes />
        </Background>
      </AuthProvider>
    </NavigationContainer>
  );
}
