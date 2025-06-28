// GET list of all of the users shops, create shop

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const shops = await prisma.shop.findMany({
      where: {
        ownerId: {
          equals: request.headers.get("user-id")!,
        },
      },
      include: {
        owner: true,
      },
    });
    return NextResponse.json(shops);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const ownerId = request.headers.get("user-id")!;
    if (!ownerId) {
      return NextResponse.json({ error: "User ID not found" }, { status: 400 });
    }
    const body = await request.json();
    const { name, description, address, phone, email } = body;
    const shop = await prisma.shop.create({
      data: {
        name,
        description,
        address,
        phone,
        email,
        ownerId,
      },
    });
    return NextResponse.json(shop);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
