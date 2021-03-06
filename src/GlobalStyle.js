import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  background: #F9FAFB;

  font-family: 'Roboto', sans-serif;
}`;

export const container = styled.div`
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  margin-left: auto;
  margin-right: auto;

  background: #fff;
  @media screen and (max-width: 968px) {
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default GlobalStyle;
