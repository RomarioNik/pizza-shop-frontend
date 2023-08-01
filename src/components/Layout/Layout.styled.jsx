import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const Container = styled.div`
  max-width: 1170px;
  padding: 0 15px;
  margin: 0 auto;
`;

export const Header = styled.header`
  height: 50px;
  width: 100%;
  background-color: beige;
`;

export const Main = styled.main`
  /* flex-grow: 1; */
  /* flex: 100%; */
  /* height: 100vh; */
  max-height: 100%;
`;

export const Footer = styled.footer`
  height: 50px;
  width: 100%;
  background-color: aqua;
`;
