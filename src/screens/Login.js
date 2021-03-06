import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../actions/auth";
import { getAuthAsyncStorage } from "../services/getAuthAsyncStorage";
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const { errorMessageLogin } = auth;
  const dispatch = useDispatch();

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
      <Image source={require("../images/logo.png")} />
      <Text
        style={{
          fontSize: 30,

          alignSelf: "center",
        }}>
        Lepton for students
      </Text>

      <Text
        style={{
          marginHorizontal: 55,
          textAlign: "center",
          marginTop: 5,
          opacity: 0.4,
        }}>
        -Checkout Education-
      </Text>
      {errorMessageLogin && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text
            style={{
              color: "#ff0000",
            }}>
            {errorMessageLogin}
          </Text>
        </View>
      )}

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
          placeholder="Class ID"
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
          placeholder="Student ID"
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
          placeholder="Student Password"
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
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("TeacherLogin")}
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
          }}>
          Teacher Login
        </Text>
        <Text
          style={{
            color: "#00716F",
          }}>
          <AntDesign
            style={{
              color: "#00716F",
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

          paddingVertical: 10,
        }}>
        New Student?
      </Text>
    </View>
  );
}
