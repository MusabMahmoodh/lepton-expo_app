import React, { useEffect } from "react";
import {
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { ListItem, Avatar } from "react-native-elements";
import SearchableDropdown from "react-native-searchable-dropdown";
import { Tab, TabView } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { retrieveStudents } from "../../../actions/teacher.student.actions";
import {
  addStudentToLesson,
  getLesson,
} from "../../../actions/teacher.lesson.actions";

//Item array for the dropdown
export default function TeacherViewStudent({ route, navigation }) {
  const { lessonId } = route.params;
  const [index, setIndex] = React.useState(0);

  const [notSelected, setNotSelected] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const teacherListStudent = useSelector((state) => state.teacherListStudent);
  const { loading, students, error } = teacherListStudent;
  const teacherGetLesson = useSelector((state) => state.teacherGetLesson);
  const {
    loading: loadingGetLsn,
    success: successGetLsn,
    error: errorGetLsn,
    currentLesson,
  } = teacherGetLesson;

  const dispatch = useDispatch();

  const handleAddNewStudent = (std) => {
    const addSt = {
      period: std.period,
      student: std.student._id,
    };
    dispatch(addStudentToLesson(lessonId, addSt));
  };

  useEffect(() => {
    if (!students) {
      dispatch(retrieveStudents());
    }
    dispatch(getLesson(lessonId));
    //else move to home
  }, []);
  useEffect(() => {
    setSelected(currentLesson?.students);
    console.log("Updaaintg");
    var tempNotSelected = [];

    students?.forEach((st) => {
      currentLesson?.students?.forEach((stdObj) => {
        if (stdObj?.student?._id === st._id) {
          return;
        }
      });
      tempNotSelected.push({
        student: st,
        period: 4, //in weeks
      });
    });
    setNotSelected(tempNotSelected);
  }, [students, currentLesson]);
  // useEffect(() => {

  // }, [selected]);
  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text
        style={{
          fontSize: 30,

          textAlign: "center",
          marginBottom: 40,
          marginTop: 40,
          color: "white",
        }}>
        Students of
        {"\n"}
        {currentLesson?.title}
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
        alwaysOpen={600}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}>
        <View style={{ paddingTop: 30 }}></View>
        <Tab value={index} onChange={setIndex}>
          <Tab.Item title="In Class" />
          <Tab.Item title="Out class" />
          {/* <Tab.Item title="New Requests" /> */}
        </Tab>

        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {console.log("selected", selected)}
              {selected?.map((std) => (
                <ListItem key={std._id} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{std?.student?.indexNumber}</ListItem.Title>
                    <ListItem.Subtitle>{std?.student?.name}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <AntDesign
                      name="delete"
                      size={24}
                      color="red"
                      onPress={() => handleDelete(std._id)}
                    />
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {notSelected?.map((std) => (
                <ListItem key={std?.student?._id} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{std?.student?.indexNumber}</ListItem.Title>
                    <ListItem.Subtitle>{std?.student?.name}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <ListItem.Content style={{ flexDirection: "row" }}>
                      <AntDesign
                        name="pluscircle"
                        size={24}
                        color="green"
                        onPress={() => handleAddNewStudent(std)}
                      />
                    </ListItem.Content>
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item>
          {/* <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <AntDesign name="eye" size={24} color="blue" />
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item> */}
        </TabView>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00716F",
    paddingTop: 50,
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
