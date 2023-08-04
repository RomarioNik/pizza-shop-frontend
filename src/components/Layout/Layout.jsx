import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import { Wrapper, Container, Main, Footer } from "./Layout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer>
        <Container>Footer</Container>
      </Footer>
    </Wrapper>
  );
};

export default Layout;
