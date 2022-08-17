import React from "react";
import { styled } from "@mui/material";
import Button from "../../components/UI/Button/Button";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/user/userActions";

function Header() {
  const dispatch = useDispatch();
  const log_out = () => {
    dispatch(logOut());
  };
  return (
    <Container id="header">
      <h1>WELCOME!</h1>
      <Button onClick={log_out} variant="contained">
        Выйти
      </Button>
    </Container>
  );
}

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  color: white;
`;

export default Header;
