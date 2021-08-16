import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Modalize } from "react-native-modalize";

import AddBtn from "../../components/AddBtn";
import ViewBtn from "../../components/ViewBtn";
import Chapters from "../../screens/Chapters";

export default function TeacherLessons({ route, navigation }) {
  return (
    <ImageBackground
      source={require("../../images/crs.png")}
      style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("TeacherClasses")}
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#9a3c7e",
          }}>
          <Image
            source={require("../../images/a1.png")}
            style={{ height: 15, width: 20 }}
          />
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 13,
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: "#9a3c7e",
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

          fontSize: 30,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}>
        MEchanics
      </Text>
      <Text
        style={{
          color: "#FFF",

          fontSize: 35,
          width: 200,
          alignSelf: "center",
          textAlign: "center",
        }}>
        Part 1
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
          onPress={() => navigation.navigate("TeacherAddItem")}>
          <AddBtn title="Add new Item" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 4,
        }}>
        <TouchableOpacity
          opacity={0.5}
          onPress={() => navigation.navigate("TeacherViewStudent")}>
          <ViewBtn title="View students taking lesson" />
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
        <View
          style={{
            flexDirection: "row",
            marginHorizontal: 30,
            marginTop: 40,
          }}>
          <Image
            source={require("../../images/2.jpg")}
            style={{
              height: 50,
              width: 50,
              borderWidth: 2,
              borderColor: "#f58084",
              borderRadius: 50,
            }}
          />
          <View style={{ marginHorizontal: 20 }}>
            <Text
              style={{
                color: "#345c74",

                fontSize: 18,
              }}>
              John Doe
            </Text>
            <Text
              style={{
                color: "#f58084",

                fontSize: 12,
              }}>
              Bsc(Hons...)
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#fff2f2",
              width: 40,
              height: 40,
              borderRadius: 40,
            }}>
            <Image source={require("../../images/a2.png")} />
          </View>
        </View>
        <View>
          <Chapters
            num={1}
            color="#fde6e6"
            percent={25}
            duration="private"
            title="Introduction"
            onPress={() => this.props.navigation.navigate("VideoPage")}
          />
          <Chapters
            num={2}
            color="#f9e1fc"
            percent={50}
            duration="private"
            title="Dynamics"
          />
          <Chapters
            num={3}
            color="#e8f1fd"
            percent={0}
            duration="private"
            title="Dynamics"
          />
          <Chapters
            num={4}
            color="#e5ffef"
            percent={0}
            duration="public"
            title="Dynamics"
          />
          <Chapters
            num={5}
            color="#fbfaf6"
            percent={0}
            duration="private"
            title="Conclusion"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingVertical: 5,
            backgroundColor: "#fff2f2",
            marginHorizontal: 20,
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 10,
            justifyContent: "center",
          }}>
          <Text
            style={{
              color: "#f58084",

              fontSize: 13,
              marginRight: 50,
            }}>
            Resume last lesson
          </Text>
          <Image source={require("../../images/a2.png")} />
        </View>
      </Modalize>
    </ImageBackground>
  );
}
