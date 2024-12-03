import Modal from "@/components/modal";
import PhotoDetailsComponent from "@/components/photo-details";
import { Locale } from "@/i18n.config";

const PhotoDetails = async ({
  params: { id, lang },
}: {
  params: { id: string; lang: Locale };
}) => {
  return (
    <Modal>
      <PhotoDetailsComponent id={id} lang={lang} />
    </Modal>
  );
};

export default PhotoDetails;
