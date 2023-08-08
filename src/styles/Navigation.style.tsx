import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

interface NavigationStyleProps {
  $extendNavbar: boolean;
}

const linkTransform = keyframes`
  from {
    transform: scale(1, 0.02) translateX(-100%);
  }

  to {
    transform: none;
    /* transform: translateX(0); */
  }
`;

export const NavbarContainer = styled.nav<NavigationStyleProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${({ $extendNavbar }) => ($extendNavbar ? "100vh" : "80px")};
  background-color: black;
  display: flex;
  flex-direction: column;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 50px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Logo = styled.div`
  color: white;
  font-size: x-large;
  font-weight: bold;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OpenLinksButton = styled.button<NavigationStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $extendNavbar }) =>
        $extendNavbar ? "rotate(45deg)" : "rotate(0)"};
    }

    &:nth-child(2) {
      opacity: ${({ $extendNavbar }) => ($extendNavbar ? "0" : "1")};
      transform: ${({ $extendNavbar }) =>
        $extendNavbar ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${({ $extendNavbar }) =>
        $extendNavbar ? "rotate(-45deg)" : "rotate(0)"};
    }
  }

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  width: 100%;
  color: white;
  font-size: x-large;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px 0;
  animation: ${linkTransform} 0.4s linear forwards;
`;
