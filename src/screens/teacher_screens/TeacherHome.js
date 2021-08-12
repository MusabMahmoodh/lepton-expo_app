import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../../container/Header";
import CourseList from "../../container/CourseList";
import AddBtn from "../../components/AddBtn";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input } from "react-native-elements";

export default function TeacherHome({ navigation }) {
  return (
    <ImageBackground
      source={require("../../images/Home.png")}
      style={{ width: "100%", height: "100%" }}>
      <ScrollView>
        <Header />
        <Text
          style={{
            paddingHorizontal: 20,
            fontSize: 35,
            paddingTop: 10,
            fontFamily: "Bold",
            color: "#AE5151",
          }}>
          Welcome back Teacher
        </Text>

        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              padding: 10,
              borderRadius: 12,
              marginHorizontal: 20,
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Search for new knowledge!"
              placeholderTextColor="#345c74"
              style={{
                fontFamily: "Bold",
                fontSize: 12,
                width: 280,
                paddingHorizontal: 12,
              }}
            />
            <Image
              source={require("../../images/sear.png")}
              style={{ height: 14, width: 14 }}
            />
          </View> */}
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#FFF2F2",
            marginTop: 15,
            marginHorizontal: 20,
            borderRadius: 20,
            paddingVertical: 30,
            paddingLeft: 30,
          }}>
          <View>
            <Text
              style={{
                color: "#345c74",
                fontSize: 20,
                fontFamily: "Bold",
                width: 250,
                paddingRight: 100,
              }}>
              Class Announcements here
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("TeacherAddNotice")}
              style={{
                flexDirection: "row",
                backgroundColor: "#f58084",
                alignItems: "center",
                marginTop: 20,
                width: 150,
                paddingVertical: 10,
                borderRadius: 14,
                paddingHorizontal: 10,
              }}>
              <Text
                style={{
                  color: "#FFF",
                  fontFamily: "Bold",
                  fontSize: 12,
                }}>
                Add Notice
              </Text>
              <Image
                source={require("../../images/a3.png")}
                style={{ marginLeft: 20, width: 8, height: 8 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../../images/undraw.png")}
            style={{ marginLeft: -80, marginTop: 35 }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text
            style={{
              color: "#345c74",
              fontFamily: "Bold",
              fontSize: 20,
            }}>
            My classes
          </Text>
          <TouchableOpacity
            opacity={0.5}
            onPress={() => navigation.navigate("TeacherAddClass")}>
            <AddBtn title="Add new Class" />
          </TouchableOpacity>
        </View>

        <CourseList
          img={require("../../images/xd.png")}
          title="Physics 20 batch"
          bg="#fdddf3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
        <CourseList
          img={require("../../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
        <CourseList
          img={require("../../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
        <CourseList
          img={require("../../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
        <CourseList
          img={require("../../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
        <CourseList
          img={require("../../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("TeacherClasses")}
        />
      </ScrollView>
    </ImageBackground>
  );
}
