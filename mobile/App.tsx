import React from "react";
import { StyleSheet, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import {Routes} from "./src/routes";
import { Background } from "./src/components/Background";

export default function App() {
  return (    
    <Background>
      <StatusBar backgroundColor="#11b9f5" barStyle="light-content" />
      <Routes />
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
