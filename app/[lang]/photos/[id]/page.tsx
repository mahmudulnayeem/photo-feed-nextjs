import PhotoDetailsComponent from "@/components/photo-details";
import { Locale } from "@/i18n.config";

const PhotoDetails = async ({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) => {
  return <PhotoDetailsComponent id={id} lang={lang} />;
};

export default PhotoDetails;
