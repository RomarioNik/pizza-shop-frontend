import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const ButtonStyled = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 100;
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
