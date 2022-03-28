import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
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
`;
const Agreement = styled.span`
  font-size: 18px;
  margin: 15px 10px;
`;
const Button = styled.button`
  padding: 10px 15px;
  background-color: white;
  border: 2px solid teal;
  font-size: 18px;

  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login into your Account</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Login</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
