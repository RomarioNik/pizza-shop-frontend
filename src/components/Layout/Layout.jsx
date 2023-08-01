import React from "react";
import { Outlet } from "react-router-dom";
import { Wrapper, Container, Header, Main, Footer } from "./Layout.styled";

const Layout = () => {
  return (
    <Wrapper>
      <Header>Header</Header>

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
