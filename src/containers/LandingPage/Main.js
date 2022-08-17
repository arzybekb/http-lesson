import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

import MAIN_BACKGROUND from "../../assets/images/main-background.jpg";
import Login from "../auth/login/Login";
import { useSearchParams } from "react-router-dom";
import Button from "../../components/UI/Button/Button";

export default function Main() {
  const [params, setParams] = useSearchParams();
  const {showLogin} = Object.fromEntries([...params]);
  const openLoginModal = () => {
    setParams({ showLogin: true });
  };

  const closeLoginModal = () => {
    setParams({});
  };
  return (
    <Container>
      <Logo>Logotype</Logo>
      <MainContent>
        <Title>lorem ipsum dolor sit amet</Title>
        <SubTitle>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor.
        </SubTitle>
        <StyledButton onClick={openLoginModal} variant="contained">
          Войти
        </StyledButton>
      </MainContent>
      {showLogin && (
        <Login open={showLogin === "true"} onClose={closeLoginModal} />
      )}
    </Container>
  );
}

const Container = styled(Box)`
  padding-top: 34px;
  padding-bottom: 155px;
  color: #ffffff;

  background-image: url(${MAIN_BACKGROUND});
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled("p")`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  margin-bottom: 200px;
`;

const MainContent = styled("div")`
  width: 50%;
  margin: 0 auto;
`;

const Title = styled("h1")`
  text-transform: uppercase;
`;

const SubTitle = styled("p")`
  width: 80%;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 60px;
`;

const StyledButton = styled(Button)`
  display: block;
  width: 55%;
  margin: 0 auto;
  margin-bottom: 16px;
  text-transform: uppercase;

  &.MuiButton-outlined {
    border: 1px solid #2ca803;
    color: white;
    border-color: white;
    &:hover {
      opacity: 0.6;
    }
  }
`;
