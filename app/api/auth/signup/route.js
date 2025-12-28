import ConnectDB from "@/app/lib/db";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await ConnectDB();

    const { username, email, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const userExist = await User.findOne({ email });
    if (userExist) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPass,
      //  role: isAdmin ? "admin" : "user",
    });

    const response = NextResponse.json(
      { success: true, message: "Signup successful" },
      { status: 201 }
    );

    response.cookies.set("userId", user._id.toString(), {
      httpOnly: true,
      path: "/",
      sameSite: "strict",
    });

    return response;
  } catch (error) {
    console.error("Signup Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
