import { getPhotoById } from "@/lib/image-data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const photoId = (await params).id;

  const data = getPhotoById(photoId);

  return NextResponse.json(data);
}
