import React, { useEffect, useState } from "react";
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
import { CheckBox } from "react-native-elements";

import Icon from "@expo/vector-icons/AntDesign";
import { AntDesign } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";
import { useDispatch, useSelector } from "react-redux";
import {
  createClass,
  updateClass,
} from "../../../actions/teacher.class.actions";
import generateRandAlphaNum from "../../../utils/generateRandAlphaNum";
export default function TeacherAddStudent({ route, navigation }) {
  // const { editItem } = route.params;

  const [indexNumber, setIndexNo] = useState("");
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [district, setDistrict] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [classToken, setClassToken] = useState("");
  const [singleDevice, setSingleDevice] = useState(false);

  const teacherCreateClass = useSelector((state) => state.teacherCreateClass);
  const { loading, success, error } = teacherCreateClass;

  const teacherUpdateClass = useSelector((state) => state.teacherUpdateClass);
  const {
    loading: loadingUpdate,
    success: successUpdate,
    error: errorUpdate,
  } = teacherUpdateClass;
  const dispatch = useDispatch();

  const handleSubmit = () => {
    console.log(
      indexNumber,
      name,
      school,
      district,
      mobileNumber,
      classToken,
      singleDevice
    );
    // //edit
    // if (!editItem && indexNumber.length > 3) {
    //   dispatch(createClass({ indexNumber }));
    // }

    // editItem && dispatch(updateClass(editItem._id, { indexNumber }));
  };
  // useEffect(() => {
  //   if (editItem) {
  //     setIndexNo(editItem.indexNumber);
  //     // setDescription(editItem.description);
  //   }
  // }, []);
  // useEffect(() => {
  //   if (success || successUpdate) {
  //     navigation.navigate("TeacherHome");
  //   }
  // }, [success, error, successUpdate, errorUpdate]);

  // useEffect(() => {
  //   if (success) {
  //     navigation.navigate("TeacherHome");
  //   }
  // }, [success, error]);
  return (
    <KeyboardAvoidingView
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
        Add new Student
        {/* {editItem ? "Update Class" : "Add new Class"} */}
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
        <View style={styles.inner}>
          {/* {error && (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text
                style={{
                  color: "#ff0000",
                }}>
                {error}
              </Text>
            </View>
          )}
          {errorUpdate && (
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <Text
                style={{
                  color: "#ff0000",
                }}>
                {errorUpdate}
              </Text>
            </View>
          )} */}

          <View
            style={{
              marginTop: 30,
              marginHorizontal: 50,
            }}>
            <Text>* Required</Text>
            <Text>Index Number *</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setIndexNo(text)}
                value={indexNumber}
              />
            </View>
          </View>
          {/* Name */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <Text>Name *</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setName(text)}
                value={name}
              />
            </View>
          </View>
          {/* school */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <Text>School (optional)</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setSchool(text)}
                value={school}
              />
            </View>
          </View>
          {/* district */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <Text>District (optional)</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setDistrict(text)}
                value={district}
              />
            </View>
          </View>
          {/* mob no */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <Text>Mobile Number (optional)</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setMobileNumber(text)}
                value={mobileNumber}
              />
            </View>
          </View>
          {/* Class token */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <Text>Class Token *</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",

                borderWidth: 2,

                paddingHorizontal: 10,
                borderColor: "#00716F",
                borderRadius: 23,
                paddingVertical: 2,
                marginTop: 5,
              }}>
              <TextInput
                style={{ paddingHorizontal: 10, width: 200 }}
                placeholder="Class Name"
                onChangeText={(text) => setClassToken(text)}
                value={classToken}
              />
            </View>
            <View>
              <TouchableOpacity
                onPress={() => setClassToken(generateRandAlphaNum(6))}
                activeOpacity={0.5}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                  backgroundColor: "#00716F",
                  paddingVertical: 10,
                  borderRadius: 23,
                  width: 240,
                }}>
                <Text
                  style={{
                    color: "white",
                  }}>
                  Generate Random Token
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Single device */}
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 50,
            }}>
            <CheckBox
              title="Do you want student to only use one device to access your class?"
              checked={singleDevice}
              onPress={() => setSingleDevice(!singleDevice)}
            />
          </View>

          <TouchableOpacity
            onPress={() => handleSubmit()}
            activeOpacity={0.5}
            style={{
              marginHorizontal: 55,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              backgroundColor: "#00716F",
              paddingVertical: 10,
              borderRadius: 23,
              width: 240,
            }}>
            <Text
              style={{
                color: "white",
              }}>
              {/* {editItem ? "Update" : "Save"} */}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("TeacherHome")}
            activeOpacity={0.5}
            style={{
              marginHorizontal: 55,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
              backgroundColor: "#fff",
              paddingHorizontal: 10,
              borderWidth: 2,

              borderColor: "#00716F",
              paddingVertical: 10,
              borderRadius: 23,
              width: 240,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Text
              style={{
                color: "#00716F",

                paddingRight: 5,
              }}>
              <AntDesign
                style={{
                  color: "#00716F",
                }}
                name="arrowleft"
                size={24}
                color="black"
              />
            </Text>
            <Text
              style={{
                color: "#00716F",
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={{
              alignSelf: "center",
              color: "#00716F",

              paddingVertical: 10,
            }}>
            How to add?
          </Text>
        </View>
      </Modalize>
    </KeyboardAvoidingView>
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
