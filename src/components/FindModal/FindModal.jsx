import React from "react";
import { BackDrop, Modal, ButtonStyled } from "./FindModal.styled";

const FindModal = () => {
  return (
    <>
      <BackDrop>
        <Modal>
          <ButtonStyled>X</ButtonStyled>
          <label />
          <input />
        </Modal>
      </BackDrop>
    </>
  );
};

export default FindModal;
