import React from "react";

import { View, TouchableOpacity } from "react-native";
import { ChatTeardropDots } from "phosphor-react-native";

import { theme } from "../../theme";

import { styles } from "./styles";

export const Widget = () => {
  return (
    <>
      <TouchableOpacity style={styless.button}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight={"bold"}
        />
      </TouchableOpacity>
    </>
  );
};
