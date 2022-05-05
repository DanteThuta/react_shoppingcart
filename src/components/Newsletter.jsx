import styled from "styled-components";
import { Send } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fcf1ed;
  /* margin: 0 20px; */
  ${mobile({ padding: "25px" })}
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  ${mobile({ fontSize: "40px" })}
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
  ${mobile({ fontSize: "20px" })}
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const Input = styled.input`
  flex: 8;
  padding: 10px;

  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 0 15px;
  padding-left: 20px;
  ${mobile({ padding: "20px 40px" })}
`;

const Button = styled.button`
  flex: 1;
  background-color: tomato;
  color: white;
  border: 0;
  border-radius: 10px;

  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter for You</Title>
      <Desc>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla
        est tempora sapiente.
      </Desc>

      <InputContainer>
        <Input placeholder="Enter Your Email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
