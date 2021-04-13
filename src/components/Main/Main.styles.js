import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

const Menu = styled.div`
  width: 100%;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const TitleMenu = styled.div`
  padding: 1rem;
  padding-bottom: 0;
  width: 15%;
  text-align: center;
  cursor: pointer;
`;

const Border = styled.div`
  width: 100%;
  border-top: 4px solid #2f80ed;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  margin-top: 1rem;
`;

const Input = styled.input`
  width: 75%;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #333333;
  border: 1px solid #bdbdbd;
  height: 56px;
  border-radius: 16px;
  padding-left: 17px;

  :focus-visible {
    outline: none;
    border: 1px solid #333333;
  }

  @media (max-width: 480px) {
    width: 94%;
  }

  @media (min-width: 481px) and (max-width: 950px) {
    margin-right: 1rem;
  }
`;

const AddDetail = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Button = styled.button`
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  height: 56px;
  width: 20%;
  border: none;
  outline: none;
  cursor: pointer;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: #ffffff;

  @media (max-width: 480px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

const TextCheckBox = styled.span`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  text-decoration: ${(props) => (props.through ? "line-through" : "none")};
`;

const ContaineCheckBox = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

const ContaineCheckBoxActive = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: ${(props) => (props.show ? "none" : "block")};
`;

const ContaineCheckBoxCompleted = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: ${(props) => (props.show ? "flex" : "none")};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ContainerButtonDelette = styled.div`
  text-align: right;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Icon = styled.div`
  color: #bdbdbd;
  cursor: pointer;
`;

const ButtonDelete = styled.button`
  background: #eb5757;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  border: none;
  width: 124px;
  height: 40px;
  outline: none;
`;

const Message = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #f33a3a;
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

export {
  Container,
  Menu,
  TitleMenu,
  Border,
  Input,
  AddDetail,
  Button,
  TextCheckBox,
  ContaineCheckBox,
  ContaineCheckBoxActive,
  ContaineCheckBoxCompleted,
  ContainerButtonDelette,
  ButtonDelete,
  Icon,
  Message,
};
