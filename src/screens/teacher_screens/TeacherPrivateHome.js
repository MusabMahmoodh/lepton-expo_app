import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { retrieveClasses } from "../../actions/teacher.class.actions";

export default function TeacherPrivateHome({ navigation }) {
  const teacherListClass = useSelector((state) => state.teacherListClass);
  const { loading, classes, error } = teacherListClass;
  const dispatch = useDispatch();
  useEffect(() => {
    if (!classes) {
      dispatch(retrieveClasses());
    }
  }, []);
  useEffect(() => {}, [classes]);
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

                  fontSize: 12,
                }}>
                Add Notice
              </Text>
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
        {error && (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text
              style={{
                color: "#ff0000",
              }}>
              {error}
            </Text>
          </View>
        )}
        {classes?.map((cls) => (
          <CourseList
            key={cls._id}
            img={require("../../images/xd.png")}
            title={cls.title}
            bg="#fdddf3"
            onPress={() => navigation.navigate("TeacherClasses")}
          />
        ))}
      </ScrollView>
    </ImageBackground>
  );
}
