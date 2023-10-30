import { transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

function generateRandomCode(length: number): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomCode = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomCode += charset[randomIndex];
  }
  return randomCode;
}

export async function POST(req: Request) {
  const { email } = await req.json();
  const senderEmail = process.env.EMAIL;
  const randomCode = generateRandomCode(8);

  if (!email) {
    return NextResponse.json(
      { message: "Not enough information" },
      { status: 400 }
    );
  }

//   try {
    await transporter.sendMail({
      from: senderEmail,
      to: email,
      subject: "Confirmation Code | CRISP",
      text: `Your code is: ${randomCode}`,
      html: ` <div>Test for registration code is: ${randomCode}</div> `
    });
    return NextResponse.json({message: "Sucesfully sent code"})
// //   } catch (error) {
// //     return NextResponse.json(
// //       { message: "Something went wrong" },
// //       { status: 500 }
// //     );
//   }
}
