import React from "react";
import styled from "styled-components";
// import { SearchOutlinedIcon } from "@mui/icons-material/SearchOutlined";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

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
    align-items: center;
  `;

  const Left = styled.div`
    width: 33.33%;
    /* background-color: red; */
    flex: 1;
  `;

  const Center = styled.div`
    width: 33.33%;
    /* background-color: orange; */
    display: flex;
    flex: 2;
    justify-content: space-between;

    .logo {
      font-size: 20px;
      font-weight: bold;
    }
  `;

  const SearchContainer = styled.div`
    background-color: grey;
    width: 70%;
    display: flex;
    justify-content: flex-start;
    .input {
      border: 0;
      width: 70%;
      padding: 10px 20px;
      /* border-radius: 30px; */
    }
  `;

  const Right = styled.div`
    width: 33.33%;
    /* background-color: green; */

    display: flex;
    justify-content: flex-end;
    justify-content: space-between;
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
          <SearchContainer>
            <input type="text" className="input" />
            <MenuItem>
              <SearchOutlined></SearchOutlined>
            </MenuItem>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
