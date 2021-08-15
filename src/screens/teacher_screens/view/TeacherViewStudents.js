import React from "react";
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

const list = [
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
  {
    name: "Amy Farha",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
    subtitle: "Vice President",
  },
  {
    name: "Chris Jackson",
    avatar_url:
      "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
    subtitle: "Vice Chairman",
  },
];
//Item array for the dropdown
export default function TeacherViewStudent({ navigation }) {
  const [index, setIndex] = React.useState(0);
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
        Students of Mechanics 1
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
          <Tab.Item title="New Requests" />
        </Tab>

        <TabView value={index} onChange={setIndex}>
          <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <AntDesign
                      name="edit"
                      size={24}
                      color="black"
                      style={{ marginRight: 28 }}
                    />
                    <AntDesign name="delete" size={24} color="red" />
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <AntDesign name="pluscircle" size={24} color="green" />
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item>
          <TabView.Item style={{ width: "100%" }}>
            <View style={styles.inner}>
              {list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                  <Avatar rounded title="MD" />

                  <ListItem.Content>
                    <ListItem.Title>{l.name}</ListItem.Title>
                    {/* <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle> */}
                  </ListItem.Content>
                  <ListItem.Content style={{ flexDirection: "row" }}>
                    <AntDesign name="eye" size={24} color="blue" />
                  </ListItem.Content>
                </ListItem>
              ))}
            </View>
          </TabView.Item>
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
