import React, { useState } from "react";
import {
  HeaderWrapper,
  HeaderUp,
  HeaderContainer,
  PhoneWrapper,
  IconPhone,
  PhoneText,
  PhoneButton,
  LoginWrapper,
  IconLogin,
  NavLinkStyled,
  HeaderMid,
  List,
  LinkStyled,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  LogoLinkStyled,
  IconLogo,
  ButtonSearch,
  IconSearch,
  IconFavorite,
  IconCart,
  HeaderDown,
  ListMenu,
  ListMenuItem,
  NavLinkMenuStyled,
  IconPizza,
  IconBurger,
  IconSushi,
  IconNoodles,
  IconSteak,
  IconDessert,
  IconDrink,
  TextMenu,
} from "./Header.styled";
import Modal from "../Modal";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const modalPosition = `
    right: auto;
    bottom: auto;
    height: 350px;
    max-width: none;
    border-radius: 0px;
  `;

  const customAnimate = {
    initial: {
      y: "-100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: "-100%",
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderUp>
          <HeaderContainer>
            <PhoneWrapper>
              <IconPhone />
              <PhoneText>+1 (800) 312-2121</PhoneText>
              <PhoneButton type="button">Call me back</PhoneButton>
            </PhoneWrapper>

            <LoginWrapper>
              <NavLinkStyled to="/login">
                <IconLogin />
                Login
              </NavLinkStyled>
            </LoginWrapper>
          </HeaderContainer>
        </HeaderUp>

        <HeaderMid>
          <HeaderContainer>
            <List>
              <li>
                <LinkStyled
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconFacebook />
                </LinkStyled>
              </li>
              <li>
                <LinkStyled
                  to="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconInstagram />
                </LinkStyled>
              </li>
              <li>
                <LinkStyled
                  to="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconTwitter />
                </LinkStyled>
              </li>
            </List>
            <LogoLinkStyled to="/">
              <IconLogo />
            </LogoLinkStyled>
            <List>
              <li>
                <ButtonSearch onClick={toggleModal} type="button">
                  <IconSearch />
                </ButtonSearch>
              </li>
              <li>
                <LinkStyled to="/wishlist">
                  <IconFavorite />
                </LinkStyled>
              </li>
              <li>
                <LinkStyled to="/cart">
                  <IconCart />
                </LinkStyled>
              </li>
            </List>
          </HeaderContainer>
        </HeaderMid>

        <HeaderDown>
          <HeaderContainer $align="center">
            <ListMenu>
              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/pizza">
                  <IconPizza />
                  <TextMenu>Pizza</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/burgers">
                  <IconBurger />
                  <TextMenu>Burgers</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/sushi">
                  <IconSushi />
                  <TextMenu>Sushi</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/noodles">
                  <IconNoodles />
                  <TextMenu>Noodles</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/noodles">
                  <IconSteak />
                  <TextMenu>Steaks</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/noodles">
                  <IconDessert />
                  <TextMenu>Desserts</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>

              <ListMenuItem>
                <NavLinkMenuStyled to="/categories/noodles">
                  <IconDrink />
                  <TextMenu>Drinks</TextMenu>
                </NavLinkMenuStyled>
              </ListMenuItem>
            </ListMenu>
          </HeaderContainer>
        </HeaderDown>
      </HeaderWrapper>

      <AnimatePresence>
        {isModalOpen && (
          <Modal
            onToggleModal={toggleModal}
            customPosition={modalPosition}
            customAnimate={customAnimate}
          >
            <motion.p
              initial={{
                opacity: 0,
                x: "100%",
              }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  delay: 0.3,
                },
              }}
              exit={{
                opacity: 0,
                x: "100%",
                transition: {
                  duration: 0.3,
                },
              }}
            >
              New text content
            </motion.p>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
