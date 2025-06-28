// GET: Get a specific service, PUT: Update a specific service, DELETE: Delete a specific service

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: Promise<{ shopId: string; id: string }> }
) {
  try {
    const { shopId, id } = await context.params;
    if (!shopId || !id) {
      return NextResponse.json(
        { error: "Shop ID or Service ID not found" },
        { status: 400 }
      );
    }
    const service = await prisma.service.findUnique({
      where: {
        id: id,
      },
      include: {
        shop: true,
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

export async function PATCH(
  request: Request,
  context: { params: Promise<{ shopId: string; id: string }> }
) {
  try {
    const { shopId, id } = await context.params;
    if (!shopId || !id) {
      return NextResponse.json(
        { error: "Shop ID or Service ID not found" },
        { status: 400 }
      );
    }
    const body = await request.json();
    const { name, description, price, category } = body;
    const service = await prisma.service.update({
      where: {
        id: id,
      },
      data: {
        ...(name && { name: name }),
        ...(description && { description: description }),
        ...(price && { price: price }),
        ...(category && { category: category }),
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

export async function DELETE(
  request: Request,
  context: { params: Promise<{ shopId: string; id: string }> }
) {
  try {
    const { shopId, id } = await context.params;
    if (!shopId || !id) {
      return NextResponse.json(
        { error: "Shop ID or Service ID not found" },
        { status: 400 }
      );
    }
    const service = await prisma.service.delete({
      where: {
        id: id,
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
 