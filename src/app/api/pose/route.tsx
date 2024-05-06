
import { NextResponse } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(res: Request) {
  return NextResponse.json({ message: "Hello World" });
}