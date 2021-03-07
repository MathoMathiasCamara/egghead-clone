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
  margin-left: auto;
  margin-right: auto;

  background: #fff;
`;

export default GlobalStyle;
