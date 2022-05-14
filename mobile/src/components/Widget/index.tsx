import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";

import BottomSheet from "@gorhom/bottom-sheet";
import { ChatTeardropDots } from "phosphor-react-native";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";

import { theme } from "../../theme";

import { Form } from "../Form";
import { Options } from "../Options";
import { Success } from "../Success";

import { styles } from "./styles";

import { feedbackTypes } from "../../utils/feedbackTypes";

export type FeedbackType = keyof typeof feedbackTypes;

const Widget: React.FC = () => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleOpen = () => {
    bottomSheetRef.current?.expand();
  };

  const handleRestartFeedback = () => {
    setFeedbackType(null);
    setFeedbackSent(false);
  };

  const handleFeedbackSent = () => {
    setFeedbackSent(true);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={() => handleOpen()}>
        <ChatTeardropDots
          size={24}
          color={theme.colors.text_on_brand_color}
          weight={"bold"}
        />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {feedbackSent ? (
          <Success onSendAnotherFeedback={handleRestartFeedback} />
        ) : (
          <>
            {feedbackType ? (
              <Form
                feedbackType={feedbackType}
                onFeedbackCanceled={handleRestartFeedback}
                onFeedbackSent={handleFeedbackSent}
              />
            ) : (
              <Options onFeedbackChange={setFeedbackType} />
            )}
          </>
        )}
      </BottomSheet>
    </>
  );
};

export default gestureHandlerRootHOC(Widget);
