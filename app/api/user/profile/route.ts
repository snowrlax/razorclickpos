import { auth } from "@/auth";
import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email } = body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        accounts: true,  
        shops: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
