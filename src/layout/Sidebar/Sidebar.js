import React from "react";
import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../utils/constants/general";

function Sidebar() {
  return (
    <Container id="sidebar">
      <Wrapper>
        <NavLink to={`/dashboard${ROUTES.COURSES}`}>Курсы</NavLink>
        <NavLink to={`/dashboard${ROUTES.PRODUCTS}`}>Товары</NavLink>
        <NavLink to={`/dashboard${ROUTES.WISH_LIST}`}>Избранные</NavLink>
        <NavLink to={`/dashboard${ROUTES.BOUGHT}`}>Покупки</NavLink>
      </Wrapper>
    </Container>
  );
}
export default Sidebar;

const Container = styled("div")`
  width: 255px;
  padding: 0 40px;
  padding-top: 16px;
  border-right: 1px solid #dcdcdc;
  background: #f6fbff;
  height: 100%;
`;
const Wrapper = styled("div")`
  display: flex;
  flex-direction: column;
  & a {
    text-decoration: none;
    margin: 10px 0;
  }
  & .active {
    color: green;
    font-weight: 600;
  }
`;
