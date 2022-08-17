import React, { useState } from "react";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Modal from "../../../components/UI/Modal/Modal";
import Button from "../../../components/UI/Button/Button";
import TextField from "@mui/material/TextField";
import { logIn } from "../../../store/user/userActions";
import useEnqueueSnackbar from "../../../components/UI/SnackBar/useEnqueueSnackbar";

export default function Login({ open, onClose }) {
  const dispatch = useDispatch();
  const notify = useEnqueueSnackbar();
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });

  const handleChange = ({ target: { name, value } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const onNavigateToDashboard = () => navigate("/dashboard");
    dispatch(logIn(values, onNavigateToDashboard, onClose, notify));
  };

  return (
    <Modal open={open} onClose={onClose} type="AUTH">
      <form onSubmit={handleSubmit}>
        <Modal.Title>
          <Title>Войти</Title>
        </Modal.Title>
        <Modal.Body>
          <Wrapper>
            <InputContainer>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </InputContainer>
            <InputContainer>
              <TextField
                fullWidth
                label="Пароль"
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
              />
            </InputContainer>

            <Button top="20px" variant="contained" fullWidth type="submit">
              Войти
            </Button>
          </Wrapper>
        </Modal.Body>
      </form>
    </Modal>
  );
}

const Title = styled("h3")`
  text-align: center;
  margin: 0;
`;
const Wrapper = styled("div")`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled("div")`
  margin-top: 20px;
`;
