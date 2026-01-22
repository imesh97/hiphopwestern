export async function POST({
  msgData,
}: {
  msgData: { name: string; email: string; msg: string };
}) {
  try {
    /* const { data, error } = await resend.emails.send({
      from: "Hip Hop Western <contact@hiphopwestern.ca>",
      to: ["contact@hiphopwestern.ca"],
      subject: "WEBMAIL - " + msgData.msg.substring(0, 10) + "....",
      react: EmailTemplate({
        firstName: msgData.name,
        email: msgData.email,
        msg: msgData.msg,
      }),
    }); */

    const data = {
      name: msgData.name,
      email: msgData.email,
      msg: msgData.msg,
    };

    console.log(
      "Email sent successfully",
      msgData.name,
      msgData.email,
      msgData.msg,
    );

    const error = false;

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
