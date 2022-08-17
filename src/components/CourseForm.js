import React, { useState } from "react";
import { styled } from "@mui/material";
import DatePicker from "./UI/DatePicker";
import TextField from "@mui/material/TextField";
import Button from "./UI/Button/Button";
import ImagePicker from "./UI/ImagePicker";

function CourseForm({ initValues, onClose, onSubmit, setSingleCourseData }) {
  const [image, setImage] = useState({
    localImage: initValues.imageId || null,
    binaryImage: null,
  });

  const imageChangeHandler = (img) => {
    setImage({
      localImage: URL.createObjectURL(img),
      binaryImage: img,
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    setSingleCourseData({ ...initValues, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit({
      ...initValues,
      ...image,
    });
  };

  return (
    <Form onSubmit={submitHandler} id="courseForm">
      <Container>
        <ImagePicker getPhoto={imageChangeHandler} photo={image.localImage} />
        <InputWrap>
          <TextField
            label="Создать курс"
            name="courseName"
            value={initValues.courseName}
            onChange={handleChange}
          />
        </InputWrap>

        <InputWrap>
          <DatePicker
            type="date"
            name="createdAt"
            value={initValues.createdAt}
            onChange={handleChange}
          />
        </InputWrap>
        <InputWrap>
          <TextField
            label="Описание"
            name="description"
            value={initValues.description}
            onChange={handleChange}
          />
        </InputWrap>

        <ButtonWrap>
          <Button variant="outlined" onClick={onClose}>
            Отмена
          </Button>
          <Button variant="contained" type="submit" form="courseForm">
            Сохранить
          </Button>
        </ButtonWrap>
      </Container>
    </Form>
  );
}

export default CourseForm;
const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;
const Container = styled("div")`
  padding: 20px;
  width: 400px;
`;

const InputWrap = styled("div")`
  width: 330px;
  margin: 15px;
`;
const ButtonWrap = styled("div")`
  display: flex;
  justify-content: space-between;
`;
