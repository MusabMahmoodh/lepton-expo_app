import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import AppLoading from "expo-app-loading";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Courses from "./src/screens/Cources";
import Lessons from "./src/screens/Xd";
import VideoPage from "./src/screens/VideoPage";
import Login from "./src/screens/Login";
const Stack = createNativeStackNavigator();
export default function App() {
  let [fontsLoaded] = useFonts({
    Bold: require("./src/fonts/Montserrat-ExtraBold.otf"),
    Medium: require("./src/fonts/Montserrat-Medium.otf"),
    Regular: require("./src/fonts/Montserrat-Regular.otf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={Login} />

          <Stack.Screen name="Home" component={Home} />

          <Stack.Screen name="Courses" component={Courses} />

          <Stack.Screen name="Lessons" component={Lessons} />

          <Stack.Screen name="VideoPage" component={VideoPage} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
