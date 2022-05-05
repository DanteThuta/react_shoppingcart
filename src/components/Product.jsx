import styled from "styled-components";
import React from "react";
import {
  SearchOutlined,
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
} from "@material-ui/icons";

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; 

  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  background-color: rgba(0, 0, 0, 0.2);

  opacity: 0;
  transition: all 1s ease;
`;

const Container = styled.div`
  flex: 1;
  min-width: 280px;
  height: 350px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5fbfd;

  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;

  border-radius: 50%;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f5fbfd;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 10px;

  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
  }
`;

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
        <Icon>
          <SearchOutlined />
        </Icon>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
