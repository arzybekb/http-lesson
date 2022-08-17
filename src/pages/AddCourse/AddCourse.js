import { styled } from "@mui/material";
import React, { useState } from "react";
import ImagePicker from "../../components/UI/ImagePicker";
import Modal from "../../components/UI/Modal/Modal";
import TextField from "@mui/material/TextField";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import useEnqueueSnackbar from "../../components/UI/SnackBar/useEnqueueSnackbar";
import { createCourse } from "../../store/course/courseActions.js";
import DatePicker from "../../components/UI/DatePicker";

function AddCourse({ open, onClose }) {
  const dispatch = useDispatch();
  const notify = useEnqueueSnackbar();

  const [values, setValues] = useState({
    courseName: "",
    description: "",
    createdAt: null,
    imageId: null,
  });

  const [image, setImage] = useState({
    localImage: null,
    binaryImage: null,
  });
  const handleGetImage = (img) => {
    const formData = new FormData();
    formData.append("file", img);
    setImage({
      localImage: URL.createObjectURL(img),
      binaryImage: formData,
    });
  };
  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCourse({ ...values, ...image }, onClose, notify));
  };

  return (
    <Modal title="Создать курс" open={open} onClose={onClose}>
      <Form onSubmit={handleSubmit} id="courseForm">
        <Container>
          <ImagePicker getPhoto={handleGetImage} photo={image.localImage} />
          <InputWrap>
            <TextField
              label="Создать курс"
              name="courseName"
              value={values.name}
              onChange={handleChange}
            />
          </InputWrap>

          <InputWrap>
            <DatePicker
              type="date"
              name="createdAt"
              value={values.createdAt}
              onChange={handleChange}
            />
          </InputWrap>
          <InputWrap>
            <TextField
              label="Описание"
              name="description"
              value={values.description}
              onChange={handleChange}
            />
          </InputWrap>

          <ButtonWrap>
            <Button variant="outlined" onClick={onClose}>
              Отмена
            </Button>
            <Button variant="contained" type="submit" form="courseForm">
              Добавить
            </Button>
          </ButtonWrap>
        </Container>
      </Form>
    </Modal>
  );
}

export default AddCourse;
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
