import React from "react";
import { View, Text } from "react-native";

import { Option } from "../Option";
import { Copyright } from "../Copyright";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { styles } from "./styles";
import { FeedbackType } from "../Widget";

interface OptionsProps {
  onFeedbackChange: (feedbackType: FeedbackType) => void;
}

export const Options: React.FC<OptionsProps> = ({ onFeedbackChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Deixe seu Feedback</Text>

      <View style={styles.options}>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <Option
            key={key}
            title={value.title}
            image={value.image}
            onPress={() => onFeedbackChange(key as FeedbackType)}
          />
        ))}
      </View>

      <Copyright />
    </View>
  );
};
