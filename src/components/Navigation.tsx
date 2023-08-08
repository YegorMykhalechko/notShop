import { Link } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "../styles/Navigation.style";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  useEffect((): any => {
    if (extendNavbar) document.body.style.overflow = "hidden";
    return (): any => (document.body.style.overflow = "scroll");
  });
  return (
    <NavbarContainer $extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/shop">Home</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <OpenLinksButton
              $extendNavbar={extendNavbar}
              onClick={() => setExtendNavbar((prev) => !prev)}
            >
              <div />
              <div />
              <div />
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Logo>IT`S NOT SHOP</Logo>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navigation;
