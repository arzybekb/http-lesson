import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { styled, Typography } from "@mui/material";
import drop from '../../assets/images/drop.svg'


const ImagePicker = ({ getPhoto, photo }) => {
  const [errors, setErrors] = useState("");

  const onDrop = useCallback((acceptedFiles, fileRejections) => {
    if (acceptedFiles[0]) {
      getPhoto(acceptedFiles[0]);
      setErrors("");
    }
    fileRejections.forEach((file) => {
      file.errors.forEach((err) => {
        if (err.code === "file-invalid-type") {
          setErrors(`недопустимый формат фото`);
        }
      });
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: "image/jpeg,image/png",
    onDrop,
  });
  return (
    <StyledImagePicker>
      <DropZoneWrapper {...getRootProps()}>
        <input type="text" {...getInputProps()} />
        <Image
          src={photo || drop}
          alt="there should be a photo here"
        />
      </DropZoneWrapper>
      <StyledTypography fontSize="14px" isError={errors}>
        {errors || (
          <>
            Нажмите на иконку чтобы <br /> загрузить или перетащите фото
          </>
        )}
      </StyledTypography>
    </StyledImagePicker>
  );
};

export default ImagePicker;

const StyledImagePicker = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DropZoneWrapper = styled("div")`
  /* margin-bottom: 20px; */
`;

const Image = styled("img")`
  width: 173px;
  height: 145px;
  border-radius: 10px;
`;

const StyledTypography = styled(Typography)`
  /* max-width: 36px; */
  letter-spacing: 0.03em;
  line-height: 18px;
  color: ${({ isError }) => (isError ? "red" : "#8d949e")};
`;
