import PhotoDetailsComponent from "@/components/photo-details";
import { Locale } from "@/i18n.config";

const PhotoDetails = async ({
  params,
}: {
  params: { id: string; lang: Locale };
}) => {
  const lang = (await params).lang;
  const id = (await params).id;

  return <PhotoDetailsComponent id={id} lang={lang} />;
};

export default PhotoDetails;
