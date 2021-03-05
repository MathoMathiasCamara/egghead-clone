import React from "react";
import styled from "styled-components";
import { container } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../Images/eggheadLogo.svg";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  border: 0 solid #e5e7eb;
  background: #fff;
  padding-left: 50px;
  padding-right: 50px;
  width: 100%;
`;

export const NavbarContainer = styled(container)`
  display: flex;
  justify-content: space-between;
  font-size: 1.6rem;
  align-items: center;

  ${container}
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #fff;
  align-items: center;
`;

export const LogoIcon = styled(Logo)`
  width: 45px;
  height: 45px;
  margin-right: 2px;
  background: transparent;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  padding-left: 30px;
  background: #fff;
`;
export const SearchBar = styled.input`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 300px;
  outline: none;
  align-self: center;
  background: #f5f5f5;
  &::placeholder {
  }
`;

export const ButtonSearch = styled.button``;
