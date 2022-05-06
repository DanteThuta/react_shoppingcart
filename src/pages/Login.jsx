import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 50%;
  background-color: white;
  padding: 15px 10px;
  ${mobile({ width: "90%" })}
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Input = styled.input`
  margin: 10px 10px 5px 5px;
  padding: 15px 5px;
  /* flex: 1; */
  min-width: 60%;

  ::placeholder {
    color: teal;
  }
  ${mobile({ minWidth: "90%" })}
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-top: 15px;
  min-width: 40%;
  background-color: white;
  border: 2px solid teal;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Link = styled.a`
  width: 100%;
  text-align: center;
  margin: 15px 0px;
  margin-top: 15px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login into your Account</Title>
        <Form>
          <Input placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button>Login</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
