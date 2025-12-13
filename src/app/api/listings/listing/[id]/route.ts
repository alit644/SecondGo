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
        {
          success: false,
          message: "Listing not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Listing fetched successfully",
        data: listings,
      },
      {
        status: 200,
      }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
