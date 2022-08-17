import { styled } from "@mui/material";
import React from "react";

const Header = React.lazy(() => import("../Header/Header"));
const SideBar = React.lazy(() => import("../Sidebar/Sidebar"));

export default function DashboardLayout({ children }) {
  return (
    <Container>
      <Header />
      <SideBar />
      <div id="main">{children}</div>
    </Container>
  );
}

const Container = styled("div")`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 1fr 90% ;
  grid-template-areas:
    "LeftMenu TopMenu"
    "LeftMenu Main  "
    "LeftMenu Main  ";

  #sidebar {
    grid-area: LeftMenu;
  }

  #header {
    grid-area: TopMenu;
  }

  #main {
    padding: 20px 10px;
    padding-left: 20px;
    text-align: left;
    grid-area: Main;
  }
`;
