import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Modalize } from "react-native-modalize";
import CourseList from "../../container/CourseList";
import { useNavigation } from "@react-navigation/native";
import AddBtn from "../../components/AddBtn";
import ViewBtn from "../../components/ViewBtn";

export default function TeacherClasses({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/cat.png")}
      style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TeacherHome")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
          }}>
          <Image
            source={require("../../images/a1.png")}
            style={{ width: 20, height: 15 }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#8bbcdb",
            marginLeft: 240,
          }}>
          <Image
            source={require("../../images/hum.png")}
            style={{ height: 15, width: 20 }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "#FFF",
          fontSize: 35,
          fontFamily: "Bold",
          width: 200,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 34,
        }}>
        Physics 21
      </Text>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 34,
        }}>
        <TouchableOpacity
          opacity={0.5}
          onPress={() => navigation.navigate("TeacherAddLesson")}>
          <AddBtn title="Add new Lesson" />
        </TouchableOpacity>
      </View>

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
        <View style={{ marginTop: 40 }}>
          <CourseList
            onPress={() => navigation.navigate("Xd")}
            img={require("../../images/xd.png")}
            title="Mechanics 1"
            bg="#fdddf3"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/sketch.png")}
            title="Sketch shortcuts and tricks"
            bg="#fef8e3"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/ae.png")}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/f.png")}
            title="Figma Essentials"
            bg="#fff0ee"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/ps.png")}
            title="Adobe Photoshop. Retouching"
            bg="#fdddf3"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/sketch.png")}
            title="Sketch shortcuts and tricks"
            bg="#fef8e3"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
          <CourseList
            img={require("../../images/ae.png")}
            title="UI Motion Design in After Effects"
            bg="#fcf2ff"
            title="Mechanics 1"
            onPress={() => navigation.navigate("TeacherLessons")}
          />
        </View>
      </Modalize>
    </ImageBackground>
  );
}
