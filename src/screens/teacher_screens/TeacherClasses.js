import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { retrieveLessons } from "../../actions/teacher.lesson.actions";

export default function TeacherClasses({ route, navigation }) {
  const { classId } = route.params;

  const [currentClass, setCurrentClass] = useState(classId);
  const teacherListLesson = useSelector((state) => state.teacherListLesson);
  const { loading, lessons, error } = teacherListLesson;
  // const teacherDelClass = useSelector((state) => state.teacherDeleteClass);
  // const { loading: delLoading, error: delError } = teacherDelClass;
  const dispatch = useDispatch();

  // const handleDelete = (id) => {
  //   dispatch(deleteClass(id));
  // };

  useEffect(() => {
    if (classId) {
      dispatch(retrieveLessons(classId));
    }
    //else move to home
  }, []);
  useEffect(() => {}, [lessons, classId]);
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
          onPress={() =>
            navigation.navigate("TeacherAddLesson", {
              editItem: null,
              classId: currentClass,
            })
          }>
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
          {lessons?.map((lesson) => (
            <CourseList
              key={lesson._id}
              img={require("../../images/xd.png")}
              title={lesson.title}
              deleteAction={() => handleDelete(lesson._id)}
              editAction={() => {
                navigation.navigate("TeacherAddLesson", {
                  editItem: lesson,
                  classId: currentClass,
                });
              }}
              bg="#fef8e3"
              onPress={() =>
                navigation.navigate("TeacherResources", {
                  lessonId: lesson._id,
                })
              }
            />
          ))}
        </View>
      </Modalize>
    </ImageBackground>
  );
}
