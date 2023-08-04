import styled from "styled-components";

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: fit-content;
  max-width: 500px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  box-shadow: 0 3px 10px -0.5px rgba(0, 0, 0, 0.2);
  ${(props) => props.$customPosition}
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 99;
  padding: 5px;
`;
