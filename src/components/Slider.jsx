import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import HomeImage from "../img/shopping.png";

//import Data
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: coral; */
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #e3f6f5;
  width: 50px;
  height: 50px;
  border-radius: 50%;

  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction == "left" && "15px"};
  right: ${(props) => props.direction == "right" && "15px"};

  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(0vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImageContainer = styled.div`
  width: 100%;
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 40px;
`;

const Text = styled.div`
  font-size: 26px;
`;

const Slider = () => {
  const [sliderItems, setSliderItems] = useState([]);
  const handleClick = (direction) => {};

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      {/* 1st Section */}
      <Wrapper>
        <Slide bg="f5fafd">
          <ImageContainer>
            <Image src={HomeImage} />
          </ImageContainer>
          <InfoContainer>
            <Title>Lorem ipsum dolor sit amet consectetur.</Title>
            <Text>
              Lorem, iTextsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quia impedit ad laboriosam fuga.
            </Text>
          </InfoContainer>
        </Slide>
      </Wrapper>
      {/* 2nd Section */}
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src={HomeImage} />
          </ImageContainer>
          <InfoContainer>
            <Title>Lorem ipsum dolor sit amet consectetur.</Title>
            <Text>
              Lorem, iTextsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quia impedit ad laboriosam fuga.
            </Text>
          </InfoContainer>
        </Slide>
      </Wrapper>
      {/* 3rd Section */}
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src={HomeImage} />
          </ImageContainer>
          <InfoContainer>
            <Title>Lorem ipsum dolor sit amet consectetur.</Title>
            <Text>
              Lorem, iTextsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quia impedit ad laboriosam fuga.
            </Text>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
