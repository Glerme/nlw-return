import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  Image,
  ImageProps,
  Text,
} from "react-native";

import { styles } from "./styles";

interface OptionProps extends TouchableOpacityProps {
  title: string;
  image: ImageProps;
}

export const Option: React.FC<OptionProps> = ({ image, title, ...rest }) => {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <Image source={image} style={styles.image} />

      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
