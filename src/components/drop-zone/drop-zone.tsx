import { Image } from "@mui/icons-material";
import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Styled } from "./drop-zone.styles";

export const MyDropzone = ({ image, setImage }: any) => {
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
