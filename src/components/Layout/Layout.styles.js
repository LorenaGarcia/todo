import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  padding: 2rem;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 20% 1fr 20%;
  grid-template-areas:
    "header header header"
    "left main rigth"
    "footer footer footer";

  @media (max-width: 480px) {
    padding: 1rem;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "footer";
  }

  @media (min-width: 481px) and (max-width: 950px) {
    padding: 2rem;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 10% 1fr 10%;
    grid-template-areas:
      "header header header"
      "left main rigth"
      "footer footer footer";
  }
`;

const Header = styled.div`
  grid-area: header;
  text-align: center;

  font-family: "Raleway", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;
  letter-spacing: -0.045em;
  color: #333333;
  margin-bottom: 3rem;
`;

const Footer = styled.div`
  grid-area: footer;
  text-align: center;
  margin-top: 2rem;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #a9a9a9;
`;

const MainContainer = styled.div`
  grid-area: main;
`;

export { Container, Header, Footer, MainContainer };
