import { NextResponse } from "next/server";
import { client } from "@/sanity/lib/client";

export const GET = async (request: Request) => {
  return new NextResponse(JSON.stringify({ name: "Bhishan Mahat" }), {
    status: 200,
  });
};

