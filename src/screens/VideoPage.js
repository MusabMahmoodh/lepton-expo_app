import React from "react";
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
  Text,
  Button,
} from "react-native";

import YoutubePlayer from "react-native-youtube-iframe";

import Chapters from "../screens/Chapters";

const { width, height } = Dimensions.get("window");

export default function VideoPage() {
  const [playing, setPlaying] = React.useState(false);
  const playerRef = React.useRef();

  const onStateChange = React.useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);
  const togglePlaying = React.useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#f58084" />
      <View style={{ position: "relative", zIndex: 0 }}>
        <View
          style={{
            position: "absolute",
            height: 60,
            width: "100%",
            backgroundColor: "transparent",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}></View>
        <YoutubePlayer
          height={300}
          ref={playerRef}
          play={playing}
          videoId={"iee2TATGMyI"}
          onChangeState={onStateChange}
        />
        <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
      </View>

      <Chapters
        color="#fde6e6"
        percent={25}
        duration="2 hours, 20 minutes"
        title="Introduction"
        num={1}
      />

      <Text
        style={{
          fontFamily: "Medium",
          textAlign: "justify",
          color: "#345c74",
          paddingLeft: 42,
          paddingRight: 35,
        }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem ipsum
        aut consequatur voluptate doloremque culpa veniam ea praesentium hic
        laborum, numquam, obcaecati repellendus expedita perferendis modi dolor
        rem fugit quo!
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 5,
          backgroundColor: "#f58084",
          marginHorizontal: 40,
          paddingVertical: 15,
          alignItems: "center",
          borderRadius: 10,
          justifyContent: "center",
          marginTop: 20,
        }}>
        <Text
          style={{
            color: "#FFF",
            fontFamily: "Bold",
            fontSize: 15,
            marginRight: 50,
          }}>
          Read more
        </Text>
        <Image source={require("../images/a3.png")} />
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  video: {
    width: width,
    height: height / 3,
  },
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
