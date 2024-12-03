import Modal from "@/components/modal";
import PhotoDetailsComponent from "@/components/photo-details";
import { Locale } from "@/i18n.config";

const PhotoDetails = async ({
  params,
}: {
  params: { id: string; lang: Locale };
}) => {
  const lang = (await params).lang;
  const id = (await params).id;
  return (
    <Modal>
      <PhotoDetailsComponent id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoDetails;
