import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Header from "../container/Header";
import CourseList from "../container/CourseList";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/auth";

export default function Home({ navigation }) {
  const auth = useSelector((state) => state.auth);

  // if (!auth.user) {
  //   navigation.navigate("Login");
  //   return null;
  // }
  // const { first_name, last_name } = auth.user;
  const dispatch = useDispatch();
  const { errorMessageLogout } = auth;
  //   <View>
  //   <Button
  //     containerStyle={{alignItems: 'center'}}
  //     loading={auth.loggingOut}
  //     onPress={() => dispatch(logout())}
  //     title="Logout"
  //   />
  // </View>
  return (
    <ImageBackground
      source={require("../images/Home.png")}
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
          Welcome back student
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
              source={require("../images/sear.png")}
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
                Change Teacher
              </Text>
              <Image
                source={require("../images/a3.png")}
                style={{ marginLeft: 20, width: 8, height: 8 }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={require("../images/undraw.png")}
            style={{ marginLeft: -80, marginTop: 35 }}
          />
        </View>
        <Text
          style={{
            color: "#345c74",
            fontFamily: "Bold",
            fontSize: 20,
            paddingHorizontal: 20,
            marginTop: 20,
            marginBottom: 10,
          }}>
          My classes
        </Text>

        <CourseList
          img={require("../images/xd.png")}
          title="Physics 20 batch"
          bg="#fdddf3"
          onPress={() => navigation.navigate("Courses")}
        />
        <CourseList
          img={require("../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("Courses")}
        />
        <CourseList
          img={require("../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("Courses")}
        />
        <CourseList
          img={require("../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("Courses")}
        />
        <CourseList
          img={require("../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("Courses")}
        />
        <CourseList
          img={require("../images/sketch.png")}
          title="Revision physics 20 batch"
          bg="#fef8e3"
          onPress={() => navigation.navigate("Courses")}
        />
      </ScrollView>
    </ImageBackground>
  );
}
