import React from "react";
import styled from "styled-components";
import { container } from "../../GlobalStyle";
import { ReactComponent as Logo } from "../Images/eggheadLogo.svg";
import { Link } from "react-router-dom";
import { HiMoon } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  border: 1 solid #e5e7eb;
  background: #fff;
  width: 100%;
  justify-content: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const NavbarContainer = styled(container)`
  height: 60px;
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  ${container};
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  background: #fff;
  align-items: center;
  cursor: pointer;
`;

export const LogoIcon = styled(Logo)`
  width: 30px;
  height: 30px;
  margin-right: 2px;
  background: transparent;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex: 1;
  background: #fff;
  padding-left: 40px;
  padding-right: 40px;
  flex-wrap: nowrap;
`;

export const SearchBar = styled.input`
  border: 1px solid #f0f0f0;
  border-radius: 5px 0 0px 5px;
  height: 40px;
  outline: none;
  background: #f9fafb;
  flex: 1;
  color: #000;
  padding-left: 60px;
  font-size: 0.9rem;
  width: 500px;

  &::placeholder {
    color: #c4c9d0;
  }
`;

export const ButtonSearch = styled.div`
  padding: 10px 20px;
  border: none;
  outline: none;

  border-radius: 0 5px 5px 0;
  background: #2563eb;
  color: #fff;
  font-size: 0.9rem;
  font-weight: bold;

  cursor: pointer;
  &:hover {
    background: #4f46e5;
  }
`;

export const OptionButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  background: transparent;
`;

export const ButtonCarreer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  border-radius: 5px 5px 5px 5px;
  background: #2563eb;
  color: #fff;

  height: 40px;
  width: 150px;
  &:hover {
    background: #4f46e5;
  }
`;

export const ButtonSignInContainer = styled.div`
  display: flex;
  align-items: center;

  background: transparent;
  padding-left: 5px;
  padding-right: 10px;
`;

export const ButtonSignIn = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  text-decoration: none;
  border-radius: 5px 5px 5px 5px;
  background: #fff;
  margin-left: 5px;
  margin-right: 20px;
  width: 70px;
  justify-content: center;
  align-items: center;

  &:hover {
    background: #f0f0f0;
  }
`;

export const IconMoon = styled(HiMoon)`
  color: #000;
  align-self: center;
  justify-content: flex-end;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const IconSearch = styled(AiOutlineSearch)`
  color: #c4c9d0;
  background: transparent;
  font-size: 1.8rem;
  cursor: pointer;
  position: absolute;
  align-self: center;
  margin-left: 15px;
`;
