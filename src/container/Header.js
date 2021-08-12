import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Menu from "../components/Menu";
const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        flexDirection: "row",
        flex: 1,
      }}>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 0,
          borderRadius: 10,
          marginTop: 30,
        }}>
        <Image
          source={require("../images/logo.png")}
          style={{ height: 60, width: 40 }}
        />
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 12,
          borderRadius: 10,
          marginTop: 30,
        }}>
        {/* <Image
                source={require("../images/hum.png")}
                style={{ height: 15, width: 20 }}
              /> */}
        <Menu />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
