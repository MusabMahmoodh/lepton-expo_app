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
    <Menu onSelect={(value) => value && alert(`Selected number: ${value}`)}>
      <MenuTrigger>
        <AntDesign name="menuunfold" size={24} color="black" />
      </MenuTrigger>
      <MenuOptions>
        <MenuOption value={1} text="One" />
        <MenuOption value={2}>
          <Text style={{ color: "red" }}>Two</Text>
        </MenuOption>
        <MenuOption text="Close" />
      </MenuOptions>
    </Menu>
  </MenuProvider>
);

export default MenuPopUp;
