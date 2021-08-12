import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import AppLoading from "expo-app-loading";

import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Courses from "./src/screens/Cources";
import Lessons from "./src/screens/Xd";
import VideoPage from "./src/screens/VideoPage";
import Login from "./src/screens/Login";
//teacher screens
import TeacherLogin from "./src/screens/teacher_screens/TeacherLogin";
import TeacherHome from "./src/screens/teacher_screens/TeacherHome";
import TeacherClasses from "./src/screens/teacher_screens/TeacherClasses";
import TeacherLessons from "./src/screens/teacher_screens/TeacherLessons";
import TeacherAddClass from "./src/screens/teacher_screens/AddEdit/TeacherAddClass";
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
      <ThemeProvider>
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
            <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
            <Stack.Screen name="TeacherHome" component={TeacherHome} />
            <Stack.Screen name="TeacherClasses" component={TeacherClasses} />
            <Stack.Screen name="TeacherLessons" component={TeacherLessons} />
            <Stack.Screen name="TeacherAddClass" component={TeacherAddClass} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}
