import { ArrowLeft } from "phosphor-react";
import { feedbackTypes } from "../../../utils/constant";
import { FeedbackType } from "../WidgetForm";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
}

export const FeedbackContentStep: React.FC<FeedbackContentStepProps> = ({
  feedbackType,
}) => {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />

          {feedbackTypeInfo.title}
        </span>
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
};
