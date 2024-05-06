
import { NextResponse } from 'next/server'
import { poseInfo } from './poseApiData';




export async function GET(res: Request) {
  const response = poseInfo

  
  return NextResponse.json(response);
}