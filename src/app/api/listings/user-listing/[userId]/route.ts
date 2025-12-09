/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "@/utils/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ userId: string }> }
) {
  console.log("🔵 API HIT → Data fetched fresh");
  
  const { userId } = await context.params;

  try {
    const pageNum = req.nextUrl.searchParams.get("page") || "1";
    const POST_PER_PAGE = 1;
    const listings = await prisma.listing.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      skip: (parseInt(pageNum) - 1) * POST_PER_PAGE,
      take: POST_PER_PAGE,
    });
    //! listings Count for userId
    const count = await prisma.listing.count({
      where: { userId },
    });

    return NextResponse.json(
      {
        success: true,
        data: listings,
        meta: {
          count,
          page: parseInt(pageNum),
          postPerPage: POST_PER_PAGE,
          totalPages: Math.ceil(count / POST_PER_PAGE),
        },
      },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({
      statusText: error?.message || "error",
      status: 500,
      message: "Internal Server Error",
    });
  }
}
