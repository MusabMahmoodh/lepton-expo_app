import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, ThemeProvider } from "react-native-elements";
import AppLoading from "expo-app-loading";

// import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";

import { loggedIn } from "./src/actions/auth";
import { getAuthAsyncStorage } from "./src/services/getAuthAsyncStorage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
// import * as Font from "expo-font";

import store from "./src/reducers";

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
import TeacherAddNotice from "./src/screens/teacher_screens/AddEdit/TeacherAddNotice";
import TeacherAddLesson from "./src/screens/teacher_screens/AddEdit/TeacherAddLesson";
import TeacherViewStudent from "./src/screens/teacher_screens/view/TeacherViewStudents";
import TeacherAddStudent from "./src/screens/teacher_screens/AddEdit/TeacherAddStudent";
import TeacherAddItem from "./src/screens/teacher_screens/AddEdit/TeacherAddItem";
const Stack = createNativeStackNavigator();
export default function App() {
  const [isLoading, setIsLoadingFromAsyncStorage] = useState(true);
  const [fontLoading, setFontLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await setIsLoadingFromAsyncStorage(true);
      const userStorage = await getAuthAsyncStorage();
      if (userStorage.user && userStorage.token) {
        await store.dispatch(
          loggedIn({
            user: userStorage.user,
          })
        );
      }
      await setIsLoadingFromAsyncStorage(false);
    };
    load();
    // const loadFonts = async () => {
    //   await Font.loadAsync({
    //     SemiBold: require("./src/fonts/Montserrat-ExtraBold.otf"),
    //     Medium: require("./src/fonts/Montserrat-Medium.otf"),
    //     Regular: require("./src/fonts/Montserrat-Regular.otf"),
    //   });
    //   setFontLoading(false);
    // };

    // loadFonts();
  }, []);

  if (isLoading) {
    return <AppLoading />;
  } else {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}>
              <React.Fragment>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="TeacherLogin" component={TeacherLogin} />
              </React.Fragment>

              <React.Fragment>
                <Stack.Screen name="Home" component={Home} />

                <Stack.Screen name="Courses" component={Courses} />

                <Stack.Screen name="Lessons" component={Lessons} />

                <Stack.Screen name="VideoPage" component={VideoPage} />

                <Stack.Screen name="TeacherHome" component={TeacherHome} />
                <Stack.Screen
                  name="TeacherClasses"
                  component={TeacherClasses}
                />
                <Stack.Screen
                  name="TeacherLessons"
                  component={TeacherLessons}
                />
                <Stack.Screen
                  name="TeacherAddClass"
                  component={TeacherAddClass}
                />
                <Stack.Screen
                  name="TeacherAddNotice"
                  component={TeacherAddNotice}
                />
                <Stack.Screen
                  name="TeacherAddLesson"
                  component={TeacherAddLesson}
                />
                <Stack.Screen
                  name="TeacherViewStudent"
                  component={TeacherViewStudent}
                />
                <Stack.Screen
                  name="TeacherAddStudent"
                  component={TeacherAddStudent}
                />
                <Stack.Screen
                  name="TeacherAddItem"
                  component={TeacherAddItem}
                />
              </React.Fragment>
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </Provider>
    );
  }
}
