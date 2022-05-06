import React from "react";
import styled from "styled-components";
// import { SearchOutlinedIcon } from "@mui/icons-material/SearchOutlined";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  ArrowDropDownOutlined,
} from "@material-ui/icons";
import { mobile } from "../responsive";

function Navbar() {
  const Container = styled.div`
    background-color: black;
    height: 60px;
    color: white;
    ${mobile({ backgroundColor: "red" })}
  `;

  const Wrapper = styled.div`
    padding: 10px 30px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 10px" })}
  `;

  const Left = styled.div`
    width: 33.33%;
    /* background-color: red; */
    flex: 1;
    display: flex;

    span {
      cursor: pointer;
    }

    .arrow {
      cursor: pointer;
    }
    ${mobile({ display: "none" })}
  `;

  const Center = styled.div`
    width: 33.33%;
    /* background-color: orange; */
    display: flex;
    flex: 2;
    justify-content: space-between;

    .logo {
      font-size: 30px;
      font-weight: bold;
      text-align: center;
      ${mobile({ marginBottom: "5px" })}
    }
  `;

  const SearchContainer = styled.div`
    background-color: #fff;
    width: 70%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    padding: 0 15px;

    .input {
      border: 0;
      width: 70%;
      padding: 10px 20px;
      outline: 0;
      /* border-radius: 30px; */
    }

    ${mobile({ width: "60px" })}
  `;

  const Right = styled.div`
    width: 33.33%;
    /* background-color: green; */

    display: flex;
    justify-content: flex-end;
    justify-content: space-between;
    flex: 1;
    padding: 0 10px;

    ${mobile({ flex: "2" })}
  `;

  const MenuItem = styled.div`
    font-size: 20px;
    cursor: pointer;
    ${mobile({ fontSize: "15px" })}

    .pagelist {
      background-color: black;
      color: white;
      border: 0;
      font-size: 20px;
      font-family: "Oswald", sans-serif;
    }
  `;

  return (
    <Container>
      <Wrapper>
        <Left>
          <span>EN</span>
          <ArrowDropDownOutlined className="arrow"></ArrowDropDownOutlined>
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
          <MenuItem>
            <select className="pagelist">
              <option value="">Product</option>
              <option value="">ProductList</option>
              <option value="">Cart</option>
            </select>
          </MenuItem>
          <MenuItem>
            <ShoppingCartOutlined></ShoppingCartOutlined>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
