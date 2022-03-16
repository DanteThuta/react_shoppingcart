import React from "react";
import styled from "styled-components";
// import { SearchOutlinedIcon } from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Navbar() {
  const Container = styled.div`
    background-color: black;
    height: 60px;
    color: white;
  `;

  const Wrapper = styled.div`
    padding: 10px 30px;
    height: 40px;
    display: flex;
    justify-content: space-between;
  `;

  const Left = styled.div`
    width: 33.33%;
    background-color: red;
    flex: 1;
  `;

  const Center = styled.div`
    width: 33.33%;
    background-color: orange;
    display: flex;
    flex: 2;
    justify-content: space-evenly;

    .logo {
      font-size: 20px;
      font-weight: bold;
    }

    .input {
      border: 0;
      /* border-radius: 30px; */
    }
  `;

  const Right = styled.div`
    width: 33.33%;
    background-color: green;

    flex: 1;
  `;

  const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <span>EN</span>
          {/* <SearchOutlinedIcon></SearchOutlinedIcon> */}
        </Left>
        <Center>
          <div className="logo">React</div>
          <input type="text" className="input" />
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
