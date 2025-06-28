// get shop details, Put shop details, delete shop details

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
    const shop = await prisma.shop.findUnique({
      where: {
        id: shopId,
      },
      include: {
        owner: true,
        services: true,
        customers: true,
        transactions: true,
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

export async function PATCH(
  request: Request,
  context: { params: Promise<{ shopId: string }> }
) {
  try {
    const shopId = (await context.params).shopId;
    if (!shopId) {
      return NextResponse.json({ error: "Shop ID not found" }, { status: 400 });
    }
    const updateData = await request.json();

    // only update the fields that are provided by the user
    const shop = await prisma.shop.update({
      where: {
        id: shopId,
      },
      data: {
        ...(updateData.name && { name: updateData.name }),
        ...(updateData.description && { description: updateData.description }),
        ...(updateData.address && { address: updateData.address }),
        ...(updateData.phone && { phone: updateData.phone }),
        ...(updateData.email && { email: updateData.email }),
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

export async function DELETE(
  request: Request,
  context: { params: Promise<{ shopId: string }> }
) {
  try {
    const shopId = (await context.params).shopId;
    if (!shopId) {
      return NextResponse.json({ error: "Shop ID not found" }, { status: 400 });
    }
    const shop = await prisma.shop.delete({
      where: {
        id: shopId,
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
