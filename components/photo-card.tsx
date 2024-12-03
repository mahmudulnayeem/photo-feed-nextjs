import { type Photos } from "@/lib/image-data";
import { Link } from "next-view-transitions";
import Image from "next/image";

const PhotoCard = ({ photo }: { photo: Photos }) => {
  return (
    <Link href={`photos/${photo.id}`} className="group">
      <Image src={photo.url} alt={photo.title} width={700} height={700} />

      <div className="title-container">
        <h4 className="title">{photo.title}</h4>
      </div>
    </Link>
  );
};

export default PhotoCard;
