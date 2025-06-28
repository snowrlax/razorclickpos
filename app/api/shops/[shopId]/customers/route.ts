// GET list of customers of a shop, POST create a customer

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
    const customers = await prisma.customer.findMany({
      where: {
        shopId: shopId,
      },
    });
    return NextResponse.json(customers);
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
    const { name, email, phone, address, notes } = body;

    // check if the customer with the phone number already exists
    const customer = await prisma.customer.findUnique({
      where: {
        phone: phone,
      },
    });
    if (customer) {
      return NextResponse.json(
        { error: "Customer with same phone number already exists" },
        { status: 400 }
      );
    }

    const newCustomer = await prisma.customer.create({
      data: {
        name,
        email,
        phone,
        ...(address && { address }),
        ...(notes && { notes }),
        shopId,
      },
    });
    return NextResponse.json(newCustomer);
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
