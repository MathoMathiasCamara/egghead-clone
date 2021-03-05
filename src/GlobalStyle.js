import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  box-sizing:border-box;
  margin:0;
  background: #e5e7eb;
}

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  font-family: 'Roboto', sans-serif;
}
`;

export const container = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  top: 0;
  background: #fff;
`;

export default GlobalStyle;
