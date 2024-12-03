import { type Photos } from "@/lib/image-data";
import PhotoCard from "./photo-card";

const PhotoList = ({ photos }: { photos: Photos[] | undefined }) => {
  return (
    <div className="img-grid">
      {photos?.map((photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
