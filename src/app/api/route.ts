import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({ message: "HELLO FROM SERVER" });
};
export const POST = async (request: Request) => {
  return NextResponse.json({ message: "HELLO FROM SERVER" });
};
export const PUT = async () => {
  return NextResponse.json({ message: "HELLO FROM SERVER" });
};
export const PATCH = async () => {
  return NextResponse.json({ message: "HELLO FROM SERVER" });
};
export const DELETE = async () => {
  return NextResponse.json({ message: "HELLO FROM SERVER" });
};
