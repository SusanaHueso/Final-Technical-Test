import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Styled } from "./drop-zone.styles";

export const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    
    console.log(acceptedFiles.name);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Styled.DropZone {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </Styled.DropZone>
  );
};
