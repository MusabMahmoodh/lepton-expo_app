import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherPrivateHome from "./TeacherPrivateHome";
import TeacherStudentHome from "./TeacherStudentHome";
import TeacherProfile from "./TeacherProfile";
const Tab = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons";
const TeacherHome = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="TeacherPrivateHome"
        component={TeacherPrivateHome}
        options={{
          title: "My Classes",

          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="home" size={30} color="#345c74" />
          ),
        }}
      />
      <Tab.Screen
        name="TeacherStudentHome"
        component={TeacherStudentHome}
        options={{
          title: "Students",

          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="team" size={30} color="#345c74" />
          ),
        }}
      />
      <Tab.Screen
        name="TeacherProfile"
        component={TeacherProfile}
        options={{
          title: "My Profile",

          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="profile" size={30} color="#345c74" />
          ),
        }}
      />
      {/* <Tab.Screen
        name="TeacherProfile"
        component={TeacherProfile}
        options={{
          title: "Messages",

          tabBarIcon: ({ tintColor }) => (
            <AntDesign name="message1" size={30} color="#345c74" />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

export default TeacherHome;

const styles = StyleSheet.create({});
