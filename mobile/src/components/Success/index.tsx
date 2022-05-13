import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import sucessImg from "../../assets/success.png";
import { Copyright } from "../Copyright";

import { styles } from "./styles";

export const Success = () => {
  return (
    <View style={styles.container}>
      <Image source={sucessImg} style={styles.image} />

      <Text style={styles.title}>Agradecemos o feedback!</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonTitle}>Quero enviar outro</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
};
