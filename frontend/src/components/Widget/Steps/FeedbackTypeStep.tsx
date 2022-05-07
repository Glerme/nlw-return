import { FeedbackType } from "../WidgetForm";

import { feedbackTypes } from "../../../utils/constant";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onFeedbackChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep: React.FC<FeedbackTypeStepProps> = ({
  onFeedbackChanged,
}) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex pt-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            key={key}
            className="bg-zinc-800 roundend-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
            onClick={() => onFeedbackChanged(key as FeedbackType)}
            type="button"
          >
            <img src={value.image.source} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
};
