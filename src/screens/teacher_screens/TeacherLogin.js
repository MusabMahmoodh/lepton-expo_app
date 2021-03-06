import React, { useEffect, useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
export default function TeacherLogin({ navigation }) {
  const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const { error: errorMessageLogin, loginSuccess } = auth;
  const dispatch = useDispatch();

  const loginHandler = () => {
    if (contactNo.length === 10 && password) {
      dispatch(login({ contact: contactNo, password }));
    }
  };
  useEffect(() => {
    if (loginSuccess) {
      navigation.navigate("TeacherHome");
    }
  }, [loginSuccess, errorMessageLogin]);

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

          alignSelf: "center",
        }}>
        Lepton for Teachers
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
          placeholder="Contact No"
          onChangeText={(text) => setContactNo(text)}
          value={contactNo}
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
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <TouchableOpacity
        onPress={() => loginHandler()}
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
          }}>
          Student Login
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
        New Teacher?
      </Text>
    </View>
  );
}
