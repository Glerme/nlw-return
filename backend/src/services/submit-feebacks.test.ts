import { SubmitFeedbackService } from "./submit-feedback";

const createFeedabackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeeback = new SubmitFeedbackService(
  { create: createFeedabackSpy },
  { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeeback.execute({
        type: "BUG",
        comment: "example",
        screenshot: "data:image/png;base64,example.png",
      })
    ).resolves.not.toThrow();

    expect(createFeedabackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
  });

  it("should not be able to submit feedback without type", async () => {
    await expect(
      submitFeeback.execute({
        type: "",
        comment: "example",
        screenshot: "data:image/png;base64,example.png",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback without comment", async () => {
    await expect(
      submitFeeback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,example.png",
      })
    ).rejects.toThrow();
  });

  it("should not be able to submit feedback with a invalid screenshot", async () => {
    await expect(
      submitFeeback.execute({
        type: "BUG",
        comment: "example",
        screenshot: "example.png",
      })
    ).rejects.toThrow();
  });
});
