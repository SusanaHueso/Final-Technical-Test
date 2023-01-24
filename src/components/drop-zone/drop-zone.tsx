import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Styled } from "./drop-zone.styles";

export type MyDropzoneType = {
  image: { url: string; type?: string; uploadedFileId: string };
  setImage: React.Dispatch<
    React.SetStateAction<{ url: string; type?: string; uploadedFileId: string }>
  >;
};

export const MyDropzone: React.FC<MyDropzoneType> = ({
  image,
  setImage,
}: any) => {
  const [previewImage, setPreviewImage] = useState<any>();
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    setImage(acceptedFiles[0]);
    setPreviewImage(
      acceptedFiles.map((image: Blob | MediaSource) =>
        URL.createObjectURL(image)
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

  return (
    <Styled.DropZone {...getRootProps()}>
      <input {...getInputProps()} />
      {!previewImage ? (
        <p>Drop files here ...</p>
      ) : (
        previewImage?.map((droppedImage: any) => (
          <Styled.Image key={droppedImage} src={droppedImage} />
        ))
      )}
    </Styled.DropZone>
  );
};
