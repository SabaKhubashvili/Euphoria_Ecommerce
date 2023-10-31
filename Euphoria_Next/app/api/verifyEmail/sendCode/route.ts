import connectDB from "@/app/Libs/MongoDb";
import { transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

const getAfterHour = () =>{
  const currentDate = new Date();
  return new Date(currentDate.getTime() + 60 * 60 * 1000); 
}

function generateRandomCode(length: number): string {
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let randomCode = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomCode += charset[randomIndex];
  }
  return randomCode.toUpperCase();
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

  try{
  const client = await connectDB();
  const db = client.db("test");
  const confirmation = db.collection("confirmations");
  const doesUserExist = await db.collection("users").findOne({ email: email });
  if (doesUserExist?._id) {
    return NextResponse.json(
      { message: "Email is already registered" },
      { status: 409 }
    );
  }
  const updatedConfirmation = await confirmation.insertOne({
    email: email,
    passCode: randomCode,
    created_at:  new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date()),
    expiration_date: getAfterHour()
  });
  await transporter.sendMail({
    from: senderEmail,
    to: email,
    subject: "Confirmation Code | CRISP",
    text: `Your code is: ${randomCode}`,
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              background-color: #FFF;
            }
            .container {
              border-radius: 10px;
              padding: 20px;
              margin: 20px;
              background-color: #FAFAFA;
            }
            .header {
              background-color: black;
              color: #fff;
              padding: 10px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .message {
              padding: 20px;
              font-size: 19px;
              text-align:center;
              font-weight:500;
              color: black;
            }
            .code {
              padding: 10px;
              text-align: center;
              font-size: 20px;
              border-radius: 5px;
              display: flex;
              justify-content: center;
            }
            .code p span{
                font-weight:700;
                text-align:center
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Confirmation Code | CRISP</h1>
            </div>
            <div class="message">
              <p>Hello, Thanks for registering on CRISP, here is your verification code</p>
            </div>
            <div class="code" style='justify-content:center;'>
              <p><span style="background-color: white; border-radius: 5px; padding: 15px;"><strong>${randomCode}</strong></span></p>
            </div>
          </div>
        </body>
      </html>
    `,
  });
  return NextResponse.json({ message: "Sucesfully sent code" });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
     );
  }
}
