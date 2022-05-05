import React, { useState } from "react";
import styled from "styled-components";
import { ArrowLeft, ArrowRight } from "@material-ui/icons";
import HomeImage from "../img/shopping.png";

//import Data
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: coral; */
  display: flex;
  position: relative;
  ${mobile({ display: "none" })}
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
  transition: 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
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
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeft />
      </Arrow>
      {/* 1st Section */}
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id} bg={item.bg}>
            <ImageContainer>
              <Image src={item.img} />
            </ImageContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Text>{item.desc}</Text>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      {/* 2nd Section */}
      {/* <Wrapper>
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
      </Wrapper> */}
      {/* 3rd Section */}
      {/* <Wrapper>
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
      </Wrapper> */}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
