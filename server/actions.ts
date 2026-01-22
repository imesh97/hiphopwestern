"use server"; // This directive must be at the very top

import { EmailTemplate } from "@/components/Contact/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Define the type for our message data
interface MessageData {
  name: string;
  email: string;
  msg: string;
}

export async function sendEmail(msgData: MessageData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Hip Hop Western <contact@hiphopwestern.ca>",
      to: ["contact@hiphopwestern.ca"],
      subject: `WEBMAIL - ` + msgData.msg.substring(0, 10) + "....",
      react: EmailTemplate({
        firstName: msgData.name,
        email: msgData.email,
        msg: msgData.msg,
      }),
    });

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, data };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return { success: false, error: "An unexpected error occurred." };
  }
}
