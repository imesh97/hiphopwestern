import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // 1. Extract the JSON body from the Request object
    const body = await request.json();
    
    // 2. Destructure msgData from the parsed body
    // This assumes your frontend sends: JSON.stringify({ msgData: { ... } })
    const { msgData } = body;

    // Optional: Validate that msgData exists
    if (!msgData) {
      return NextResponse.json(
        { error: "Missing msgData in request body" },
        { status: 400 }
      );
    }

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
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}