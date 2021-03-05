import React from "react";
import {
  Nav,
  NavbarContainer,
  LogoContainer,
  LogoIcon,
  SearchBar,
  ButtonSearch,
  SearchBarContainer
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
          <SearchBar />
          <ButtonSearch></ButtonSearch>
        </SearchBarContainer>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
