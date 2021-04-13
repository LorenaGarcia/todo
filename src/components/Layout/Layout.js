import React from "react";
import { Container, Header, Footer, MainContainer } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header>#todo</Header>
      <MainContainer>{children}</MainContainer>
      <Footer>created by Lorraine - devChallenges.io</Footer>
    </Container>
  );
};

export { Layout };
