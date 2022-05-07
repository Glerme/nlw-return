import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackService {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error("Type is required");
    }

    if (!comment) {
      throw new Error("Comment is required");
    }

    if (screenshot && !screenshot.startsWith("data:image/png;base64")) {
      throw new Error("Screenshot must be a base64 encoded image");
    }

    const feedback = await this.feedbacksRepository.create({
      type,
      comment,
      screenshot,
    });

    await this.mailAdapter.sendMail({
      subject: "Novo Feedback",
      body: [
        `<div style="font-family: sans-serif; font-size: 16px"; color:#222;>`,
        `<p>Tipo do feedback: ${type}</p>`,
        `<p>Comentario: ${comment}</p>`,
        `</div>`,
      ].join(""),
    });

    return feedback;
  }
}
