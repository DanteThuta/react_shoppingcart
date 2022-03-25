import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Container = styled.div`
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: #fcf1ed;
  /* margin: 0 20px; */
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
`;
const Desc = styled.div`
  font-size: 24px;
  margin-bottom: 15px;
`;
const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  flex: 8;
  padding: 10px;

  border: 1px solid lightgray;
  border-radius: 15px;
  margin: 0 15px;
  padding-left: 20px;
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
