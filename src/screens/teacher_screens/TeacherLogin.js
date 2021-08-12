import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
export default function TeacherLogin({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "#FFF",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}>
      <Image source={require("../../images/logo.png")} />
      <Text
        style={{
          fontSize: 30,
          fontFamily: "SemiBold",
          alignSelf: "center",
        }}>
        Lepton for Teachers
      </Text>

      <Text
        style={{
          fontFamily: "SemiBold",
          marginHorizontal: 55,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}>
        -Checkout Education-
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 50,
          paddingHorizontal: 10,
          borderColor: "#00716F",
          borderRadius: 23,
          paddingVertical: 2,
        }}>
        <Icon name="mail" color="#00716F" size={24} />

        <TextInput
          style={{ paddingHorizontal: 10, width: 200 }}
          placeholder="Teacher ID"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 55,
          borderWidth: 2,
          marginTop: 15,
          paddingHorizontal: 10,
          borderColor: "#00716F",
          borderRadius: 23,
          paddingVertical: 2,
        }}>
        <Icon name="mail" color="#00716F" size={24} />
        <TextInput
          style={{ paddingHorizontal: 10, width: 200 }}
          placeholder="Password"
        />
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        activeOpacity={0.5}
        style={{
          marginHorizontal: 55,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
          backgroundColor: "#00716F",
          paddingVertical: 10,
          borderRadius: 23,
          width: 240,
        }}>
        <Text
          style={{
            color: "white",
            fontFamily: "SemiBold",
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        activeOpacity={0.5}
        style={{
          marginHorizontal: 55,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          borderWidth: 2,

          borderColor: "#00716F",
          paddingVertical: 10,
          borderRadius: 23,
          width: 240,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Text
          style={{
            color: "#00716F",
            fontFamily: "SemiBold",
          }}>
          Student Login
        </Text>
        <Text
          style={{
            color: "#00716F",
            fontFamily: "SemiBold",
          }}>
          <AntDesign
            style={{
              color: "#00716F",
              fontFamily: "SemiBold",
            }}
            name="arrowright"
            size={24}
            color="black"
          />
        </Text>
      </TouchableOpacity>
      <Text
        onPress={() => navigation.navigate("Register")}
        style={{
          alignSelf: "center",
          color: "#00716F",
          fontFamily: "SemiBold",
          paddingVertical: 10,
        }}>
        New Teacher?
      </Text>
    </View>
  );
}
