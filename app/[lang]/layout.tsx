import React from "react";

const PhotoLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default PhotoLayout;
