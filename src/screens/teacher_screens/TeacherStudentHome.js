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
  ScrollView,
} from "react-native";
import { SearchBar, Button } from "react-native-elements";

import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { ListItem, Avatar } from "react-native-elements";
import SearchableDropdown from "react-native-searchable-dropdown";
import { Tab, TabView } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStudent,
  retrieveStudents,
} from "../../actions/teacher.student.actions";

//Item array for the dropdown
export default function TeacherViewStudent({ navigation }) {
  const [index, setIndex] = React.useState(0);
  const teacherListStudent = useSelector((state) => state.teacherListStudent);
  const { loading, students, error } = teacherListStudent;
  const teacherDelStudent = useSelector((state) => state.teacherDeleteStudent);
  const { loading: delLoading, error: delError } = teacherDelStudent;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteStudent(id));
  };

  useEffect(() => {
    if (!students) {
      dispatch(retrieveStudents());
    }
    //else move to home
  }, []);
  useEffect(() => {}, [students]);

  return (
    <View
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}>
      <Text
        style={{
          fontSize: 30,

          alignSelf: "center",
          marginBottom: 40,
          marginTop: 40,
          color: "white",
        }}>
        My Students
      </Text>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("TeacherAddStudent", {
            editItem: null,
          })
        }
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
          Add New Student
        </Text>
      </TouchableOpacity>
      <View style={{ paddingTop: 4 }}>
        <SearchBar
          placeholder="Search Student..."
          // onChangeText={this.updateSearch}
          // value={search}
        />
      </View>

      <ScrollView style={styles.inner}>
        {students?.map((std) => (
          <ListItem key={std._id} bottomDivider>
            <Avatar rounded title="MD" />

            <ListItem.Content>
              <ListItem.Title>{std.indexNumber}</ListItem.Title>
              <ListItem.Subtitle>{std.name}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Content style={{ flexDirection: "row" }}>
              <AntDesign
                name="edit"
                size={24}
                color="black"
                style={{ marginRight: 28 }}
                onPress={() => {
                  navigation.navigate("TeacherAddStudent", {
                    editItem: std,
                  });
                }}
              />
              <AntDesign
                name="delete"
                size={24}
                color="red"
                onPress={() => handleDelete(std._id)}
              />
            </ListItem.Content>
          </ListItem>
        ))}
      </ScrollView>
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
