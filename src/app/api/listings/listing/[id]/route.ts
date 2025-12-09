/* eslint-disable @typescript-eslint/no-explicit-any */

import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

//! Get Listings by id (Private Route)
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  console.log("🔵 API HIT → Data fetched fresh BY_ID");

  const { id } = await context.params;

  try {
    const listings = await prisma.listing.findUnique({
      where: { id },
      include: {
        user: true,
      },
    });

    if (!listings) {
      return NextResponse.json(
        { success: false, message: "Listing not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: 200 ,
        message: "Listings fetched successfully",
        success: true,
        data: listings,
      },
    );
  } catch (error: any) {
    return NextResponse.json({
      statusText: error?.message || "error",
      status: 500,
      message: "Internal Server Error",
    });
  }
}
