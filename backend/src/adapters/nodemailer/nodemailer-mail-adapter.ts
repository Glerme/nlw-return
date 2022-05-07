import nodemailer from "nodemailer";

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "83e4601a90aa78",
    pass: "c4bc02350a3434",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendMailData) {
    const email = await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Guilherme Felipe <guiggff@gmail.com>",
      subject,
      html: body,
    });
  }
}
