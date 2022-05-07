import { useState } from "react";

import { CloseButton } from "../CloseButton";

import { feedbackTypes } from "../../utils/constant";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export type FeedbackType = keyof typeof feedbackTypes;

export const WidgetForm: React.FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleRestartFeedback = () => {
    setFeedbackSent(false);
    setFeedbackType(null);
  };

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg text-white w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestart={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400 p-4">
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://glerme.dev"
          target="_blank"
        >
          Guilherme Felipe
        </a>
      </footer>
    </div>
  );
};
