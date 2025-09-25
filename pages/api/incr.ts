import { NextRequest, NextResponse } from "next/server";

// Switch to node runtime due to filesystem access
export const config = {
  runtime: "nodejs",
};

export default async function incr(req: NextRequest): Promise<NextResponse> {
  return new NextResponse("analytics disabled", { status: 404 });
}
