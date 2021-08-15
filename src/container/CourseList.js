import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
export default function CourseList({ onPress, img, title, bg, deleteAction }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: "row",
        backgroundColor: bg,
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 20,
        alignItems: "center",
        marginTop: 10,
      }}>
      <Image source={img} style={{ width: 40, height: 40 }} />

      <View>
        <Text
          style={{
            color: "#345c74",

            fontSize: 13,
            paddingHorizontal: 20,
            width: 170,
          }}>
          {title}
        </Text>
        <Text
          style={{
            color: "#f58084",

            fontSize: 12,
            paddingHorizontal: 20,
          }}>
          10 hours, 19 lessons
        </Text>
      </View>

      {/* <ProgressCircle
                        percent={30}
                        radius={17}
                        borderWidth={1.5}
                        color="f580084"
                        shadowColor="#FFF"
                        bgColor="#FFF"
                    > */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => alert("Edit")}>
          <AntDesign
            name="edit"
            size={24}
            color="black"
            style={{ marginRight: 28 }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteAction()}>
          <AntDesign name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
      {/* </ProgressCircle> */}
    </TouchableOpacity>
  );
}
