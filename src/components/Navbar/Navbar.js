import React from "react";
import {
  Nav,
  NavbarContainer,
  LogoContainer,
  LogoIcon,
  SearchBar,
  ButtonSearch,
  SearchBarContainer,
  OptionButtonsContainer,
  ButtonCarreer,
  ButtonSignInContainer,
  ButtonSignIn,
  IconSearch,
  IconMoon
} from "./Navbar.elements";

function Navbar(params) {
  return (
    <Nav>
      <NavbarContainer>
        <LogoContainer>
          <LogoIcon />
          egghead.io
        </LogoContainer>

        <SearchBarContainer>
          <IconSearch />
          <SearchBar placeholder="What do you wanna learn today?" />
          <ButtonSearch>Search</ButtonSearch>
        </SearchBarContainer>
        <OptionButtonsContainer>
          <ButtonCarreer>Carrer Planning</ButtonCarreer>
          <ButtonSignInContainer>
            <ButtonSignIn>Sign In</ButtonSignIn>
          </ButtonSignInContainer>
          <IconMoon />
        </OptionButtonsContainer>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
