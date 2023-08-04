import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { Container } from "../Layout/Layout.styled";
// icons
import { ReactComponent as Phone } from "../../images/icons/header/phone-call.svg";
import { ReactComponent as Login } from "../../images/icons/header/login-person.svg";
import { ReactComponent as Facebook } from "../../images/icons/social/facebook.svg";
import { ReactComponent as Instagram } from "../../images/icons/social/instagram.svg";
import { ReactComponent as Twitter } from "../../images/icons/social/twitter.svg";
import { ReactComponent as Logo } from "../../images/icons/logo/logo.svg";
import { ReactComponent as Search } from "../../images/icons/shop/search.svg";
import { ReactComponent as Favorite } from "../../images/icons/shop/heart.svg";
import { ReactComponent as Cart } from "../../images/icons/shop/cart.svg";
import { ReactComponent as Pizza } from "../../images/icons/menu/pizza-menu.svg";
import { ReactComponent as Burger } from "../../images/icons/menu/burger-menu.svg";
import { ReactComponent as Sushi } from "../../images/icons/menu/sushi-menu.svg";
import { ReactComponent as Noodles } from "../../images/icons/menu/noodles-menu.svg";
import { ReactComponent as Steak } from "../../images/icons/menu/steak-menu.svg";
import { ReactComponent as Dessert } from "../../images/icons/menu/dessert-menu.svg";
import { ReactComponent as Drink } from "../../images/icons/menu/drink-menu.svg";

export const HeaderWrapper = styled.header`
  width: 100%;
`;

// --------  HEADER UP  -----------

export const HeaderUp = styled.div`
  height: 58px;
  display: flex;
  align-items: center;
  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.headerColor};
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: ${(props) => props.$align || "space-between"};
  align-items: center;
  flex-grow: 1;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconPhone = styled(Phone)`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  fill: currentColor;
`;

export const PhoneText = styled.span`
  margin-right: 22px;
  font-size: 17px;
  font-weight: 700;
  line-height: calc(17 / 17);
`;

export const PhoneButton = styled.button`
  font-weight: 700;
  line-height: calc(14 / 14);
  color: #ffffff;
  transition: color ${({ theme }) => theme.transition.baseTransition};

  &:hover {
    color: rgba(255, 255, 255, 0.55);
  }
`;

export const LoginWrapper = styled.div``;

export const IconLogin = styled(Login)`
  width: 18px;
  height: 18px;
  margin-right: 11px;
  fill: currentColor;
  transition: fill ${({ theme }) => theme.transition.baseTransition};
`;

export const NavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: calc(14 / 14);
  color: #ffffff;
  transition: color ${({ theme }) => theme.transition.baseTransition};

  &:hover {
    color: rgba(255, 255, 255, 0.55);
  }
`;

// --------  HEADER MIDDLE  -----------

export const HeaderMid = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.headerColor};
  transition: color ${({ theme }) => theme.transition.baseTransition};

  &:hover {
    color: rgba(58, 61, 73, 0.55);
  }
`;

const Icon = ` 
  width: 18px;
  height: 18px;
  fill: currentColor;
  `;

export const IconFacebook = styled(Facebook)`
  ${Icon}
`;

export const IconInstagram = styled(Instagram)`
  ${Icon}
`;

export const IconTwitter = styled(Twitter)`
  ${Icon}
`;

export const LogoLinkStyled = styled(Link)`
  color: ${({ theme }) => theme.colors.logoHeader};
`;

export const IconLogo = styled(Logo)`
  width: 87px;
  height: 62px;
  fill: currentColor;
`;

export const ButtonSearch = styled.button`
  color: ${({ theme }) => theme.colors.headerColor};

  &:hover {
    color: rgba(58, 61, 73, 0.55);
  }
`;

export const IconSearch = styled(Search)`
  ${Icon}
`;

export const IconFavorite = styled(Favorite)`
  ${Icon}
`;

export const IconCart = styled(Cart)`
  ${Icon}
`;

// --------  HEADER DOWN  -----------

export const HeaderDown = styled.nav`
  width: 100%;
  padding-bottom: 35px;
`;

export const ListMenu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 25px;
`;

export const ListMenuItem = styled.li``;

export const NavLinkMenuStyled = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.headerColor};
  transition: color ${({ theme }) => theme.transition.baseTransition};

  &:hover {
    color: rgba(58, 61, 73, 0.55);
  }
`;

const IconMenu = ` 
  width: 40px;
  height: 40px;
  fill: currentColor;
  `;

export const IconPizza = styled(Pizza)`
  ${IconMenu}
`;

export const IconBurger = styled(Burger)`
  ${IconMenu}
`;

export const IconSushi = styled(Sushi)`
  ${IconMenu}
`;

export const IconNoodles = styled(Noodles)`
  ${IconMenu}
`;

export const IconSteak = styled(Steak)`
  ${IconMenu}
`;

export const IconDessert = styled(Dessert)`
  ${IconMenu}
`;

export const IconDrink = styled(Drink)`
  ${IconMenu}
`;

export const TextMenu = styled.span``;
