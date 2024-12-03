import PhotoList from "@/components/photo-list";
import { Photos } from "@/lib/image-data";

export default async function Home() {
  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos: Photos[] = await response.json();

  return <PhotoList photos={photos} />;
}
