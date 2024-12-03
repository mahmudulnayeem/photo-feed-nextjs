import Modal from "@/components/modal";
import React from "react";

const ModalLayout = ({ children }: { children: React.ReactNode }) => {
  return <Modal>{children}</Modal>;
};

export default ModalLayout;
