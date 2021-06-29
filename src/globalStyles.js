import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  z-index: 1;
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default GlobalStyle;
