import React, { useState } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";

import { ArrowLeft } from "phosphor-react-native";
import { captureScreen } from "react-native-view-shot";

import { feedbackTypes } from "../../utils/feedbackTypes";

import { Button } from "../Button";
import { FeedbackType } from "../Widget";
import { ScreenshotButton } from "../ScreenshotButton";

import { styles } from "./styles";
import { theme } from "../../theme";

interface FormProps {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export const Form: React.FC<FormProps> = ({
  feedbackType,
  onFeedbackSent,
  onFeedbackCanceled,
}) => {
  const [isSendingFeeback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const feedbackInfo = feedbackTypes[feedbackType];

  const handleScreenshot = () => {
    captureScreen({
      format: "jpg",
      quality: 0.8,
    })
      .then((uri) => {
        setScreenshot(uri);
      })
      .catch((error) => Alert.alert("Erro ao capturar tela", error.message));
  };

  const handleScreeshotRemove = () => {
    setScreenshot(null);
  };

  const handleSubmit = async () => {
    if (isSendingFeeback) return;

    setIsSendingFeedback(true);

    try {
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendingFeedback(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight={"bold"}
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <Image source={feedbackInfo.image} style={styles.image} />
          <Text style={styles.titleContent}>{feedbackInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreeshotRemove}
          screenshot={screenshot}
        />

        <Button isLoading={isSendingFeeback} onPress={handleSubmit} />
      </View>
    </View>
  );
};
