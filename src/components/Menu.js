import React from "react";
import { Text } from "react-native";
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";
import { AntDesign } from "@expo/vector-icons";
const MenuPopUp = () => (
  <MenuProvider
    customStyles={{ backdrop: { backgroundColor: "red" } }}
    style={{
      flexDirection: "column",
      paddingLeft: 60,
      paddingRight: 0,
      paddingBottom: 60,
      paddingTop: 0,
    }}>
    <Menu onSelect={(value) => alert(`Selected number: ${value}`)}>
      <MenuTrigger>
        <AntDesign name="antdesign" size={24} color="black" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} text="One" />
        <MenuOption value={2}>
          <Text style={{ color: "red" }}>Two</Text>
        </MenuOption>
        <MenuOption value={3} disabled={true} text="Three" />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);

export default MenuPopUp;
