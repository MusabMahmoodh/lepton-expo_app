import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const AddBtn = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#f58084",
        padding: 5,
        borderRadius: 23,
      }}>
      <Text
        style={{
          color: "#FFF",
          fontSize: 15,

          paddingHorizontal: 10,
        }}>
        {title}
      </Text>
      <AntDesign name="pluscircle" size={24} color="#FFF" />
    </View>
  );
};

export default AddBtn;

const styles = StyleSheet.create({});
