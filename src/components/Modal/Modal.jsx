import React, { useEffect } from "react";
import { BackDrop, ModalWindow, ButtonClose } from "./modal.styled";
import { motion } from "framer-motion";

const Modal = ({ onToggleModal, customPosition, customAnimate, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onToggleModal();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onToggleModal]);

  const backDropClick = (e) => {
    if (e.currentTarget === e.target) onToggleModal();
  };

  // const baseCustomAnimate = {
  //   initial: {
  //     scale: 0,
  //   },
  //   animate: {
  //     scale: 1,
  //     transition: {
  //       duration: 0.3,
  //     },
  //   },
  //   exit: {
  //     scale: 0,
  //     transition: {
  //       delay: 0.2,
  //     },
  //   },
  // };

  return (
    <BackDrop
      as={motion.div}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          delay: 0.2,
        },
      }}
      onClick={backDropClick}
    >
      <ModalWindow
        as={motion.div}
        $customPosition={customPosition}
        initial={{ ...customAnimate.initial }}
        animate={{ ...customAnimate.animate }}
        exit={{ ...customAnimate.exit }}
      >
        <ButtonClose onClick={onToggleModal} type="button">
          X
        </ButtonClose>
        {children}
      </ModalWindow>
    </BackDrop>
  );
};

export default Modal;
