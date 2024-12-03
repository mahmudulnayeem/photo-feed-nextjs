import PhotoDetailsComponent from "@/components/photo-details";
import { Locale } from "@/i18n.config";
type Params = Promise<{ lang: Locale; id: string }>;
const PhotoDetails = async ({ params }: { params: Params }) => {
  const lang = (await params).lang;
  const id = (await params).id;

  return <PhotoDetailsComponent id={id} lang={lang} />;
};

export default PhotoDetails;
