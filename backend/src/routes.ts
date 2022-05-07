import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";

import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedbacks-repositories";
import { SubmitFeedbackService } from "./services/submit-feedback";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodemailerMailAdapter = new NodemailerMailAdapter();

  const submitFeedbackService = new SubmitFeedbackService(
    prismaFeedbacksRepository,
    nodemailerMailAdapter
  );

  const response = await submitFeedbackService.execute({
    comment,
    type,
    screenshot,
  });

  return res.status(201).json({ data: response });
});
