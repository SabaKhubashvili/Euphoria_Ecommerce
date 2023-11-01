import connectDB from "@/app/Lib/MongoDb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { passCode, email } = await req.json();

  if (!passCode || !email) {
    return NextResponse.json(
      { message: "Passcode not provided" },
      { status: 400 }
    );
  }

  const client = await connectDB();
  const db = client.db("test");
  const confirmation = db.collection("confirmations");

  try {
    const PSCD_DB = await confirmation.findOne({
      email,
    });
    NextResponse.json({message:PSCD_DB?.passCode},{status:200})
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", sucess: false },
      { status: 500 }
    );
  }
}
