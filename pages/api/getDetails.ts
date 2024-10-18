import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";

export async function GET() {
  try {
    await connectToDatabase();

    const users = await User.find({}).sort({ dateFrom: -1 });

    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching user details", error },
      { status: 500 }
    );
  }
}
