"use client";

import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import Image from "next/image";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const router = useTransitionRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  function onHide() {
    router.back();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHide}
      className="shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md "
    >
      <span onClick={onHide} className="flex justify-end cursor-pointer">
        <Image src="/assets/xmark.svg" alt="close" width={30} height={30} />
      </span>
      {children}
    </dialog>,
    document.getElementById("modal-root-content") as HTMLElement
  );
};

export default Modal;
