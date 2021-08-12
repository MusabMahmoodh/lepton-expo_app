import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView,
} from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
export default function TeacherAddClass({ navigation }) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "SemiBold",
          alignSelf: "center",
          marginBottom: 40,
          marginTop: "30%",
          color: "white",
        }}>
        Add new Class
      </Text>
      <Modalize
        handleStyle={{
          marginTop: 30,
          backgroundColor: "#e9e9e9",
          width: 80,
        }}
        modalStyle={{
          borderTopLeftRadius: 60,
          borderTopRightRadius: 60,
        }}
        alwaysOpen={500}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}>
        <View style={styles.inner}>
          <View
            style={{
              marginTop: 50,
              marginHorizontal: 50,
            }}>
            <Text>Class Name</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <Icon name="mail" color="#00716F" size={24} />

              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 5,
              marginHorizontal: 50,
            }}>
            <Text>Description</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <Icon name="mail" color="#00716F" size={24} />

              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
              />
            </View>
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
              Save
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
                fontFamily: "SemiBold",
                paddingRight: 5,
              }}>
              <AntDesign
                style={{
                  color: "#00716F",
                  fontFamily: "SemiBold",
                }}
                name="arrowleft"
                size={24}
                color="black"
              />
            </Text>
            <Text
              style={{
                color: "#00716F",
                fontFamily: "SemiBold",
              }}>
              Cancel
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
            How to add?
          </Text>
        </View>
      </Modalize>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00716F",
  },
  scrollView: {
    backgroundColor: "white",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  header: {
    fontSize: 36,
    marginBottom: 48,
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12,
  },
});
