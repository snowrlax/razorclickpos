// GET list of services, create service POST
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ shopId: string }> }
) {
  try {
    const shopId = (await context.params).shopId;
    if (!shopId) {
      return NextResponse.json({ error: "Shop ID not found" }, { status: 400 });
    }
    const service = await prisma.service.findMany({
      where: {
        shopId: shopId,
      },
    });
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function POST(
  request: Request,
  context: { params: Promise<{ shopId: string }> }
) {
  try {
    const shopId = (await context.params).shopId;
    if (!shopId) {
      return NextResponse.json({ error: "Shop ID not found" }, { status: 400 });
    }
    const body = await request.json();
    const { name, description, price, category } = body;
    const service = await prisma.service.create({
      data: {
        name,
        ...(description && { description }),
        ...(price !== undefined && { price }),
        ...(category && { category }),
        shopId,
      },
    });
    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
