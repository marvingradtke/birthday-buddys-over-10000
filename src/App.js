import React from "react";
import styled from "@emotion/styled";
import GlobalStyles from "./GlobalStyles";

const Header = styled.header`
  display: flex;
  height: 60px;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  background-color: grey;
`;

const Main = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Footer = styled.footer`
  height: 60px;
  background-color: grey;
  justify-content: space-around;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>Header</Header>
      <Main>Main</Main>
      <Footer>Footer</Footer>
    </>
  );
}

export default App;
