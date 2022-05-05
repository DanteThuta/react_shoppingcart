import styled from "styled-components";
import Annoucement from "../components/Announcement";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 34px;
  text-align: center;
  margin-bottom: 30px;
`;

//  TOP SECTION

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TopButton = styled.button`
  padding: 10px 15px;
  border: 2px solid teal;

  border: ${(props) => props.type === "confirm" && "filled"};
  background-color: ${(props) => (props.type === "confirm" ? "black" : "none")};
  color: ${(props) => props.type === "confirm" && "white"};

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const TopTexts = styled.div``;

const TopText = styled.span`
  margin: 5px 10px;
  text-decoration: underline;

  cursor: pointer;
`;

// BOTTOM SECTION

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 0;
`;

const Info = styled.div`
  flex: 3;

  display: flex;
  justify-content: space-between;

  flex-direction: column;
`;
// PRODUCT SECTION
const Product = styled.div`
  display: flex;

  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  justify-content: space-evenly;
`;

const Image = styled.img`
  width: 200px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 25px;

  margin-left: 35px;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;

  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

//PRICE SECTION
const Price = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const AddPriceContainer = styled.div`
  padding: 15px 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceDisplay = styled.span`
  border: 2px solid teal;
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceAmount = styled.div`
  font-size: 22px;
  font-weight: bold;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 80%;
`;

//SUMMARY SECTION
const Summary = styled.div`
  flex: 1;

  border-radius: 10px;
  border: 0.5px solid lightgray;

  height: 60vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SummaryTitle = styled.h1`
  text-align: center;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 15px 10px;

  font-size: ${(props) => props.type === "total" && "28px"};
`;

const SummaryText = styled.span``;

const SummaryPrice = styled.span``;

const SummaryButton = styled.button`
  padding: 10px 15px;
  /* width: 100%; */

  margin: 5px auto;
  background-color: black;
  color: white;
  border: 0;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <Title>Your Shopping Bag : </Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="confirm">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Detail>
                  <ProductName>
                    <b>ProductName: </b>JESSIE THUNDER SHOES
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>93813718293
                  </ProductID>
                  <ProductColor color="black"></ProductColor>
                  <ProductSize>
                    <b>Size: </b>37.8
                  </ProductSize>
                </Detail>
              </ProductDetail>

              <Price>
                <AddPriceContainer>
                  <Remove />
                  <PriceDisplay>2</PriceDisplay>
                  <Add />
                </AddPriceContainer>

                <PriceAmount> $ 30</PriceAmount>
              </Price>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                {/* <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" /> */}
                <Detail>
                  <ProductName>
                    <b>ProductName: </b>HAKURA T-SHIRT
                  </ProductName>
                  <ProductID>
                    <b>ID:</b>93813718293
                  </ProductID>
                  <ProductColor color="gray"></ProductColor>
                  <ProductSize>
                    <b>Size: </b>M
                  </ProductSize>
                </Detail>
              </ProductDetail>

              <Price>
                <AddPriceContainer>
                  <Remove />
                  <PriceDisplay>2</PriceDisplay>
                  <Add />
                </AddPriceContainer>

                <PriceAmount> $ 30</PriceAmount>
              </Price>
            </Product>
          </Info>

          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryText>Subtotal: </SummaryText>
              <SummaryPrice>$ 80</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Estimated Shipping</SummaryText>
              <SummaryPrice>$ 5.90</SummaryPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryText>Shipping Discount</SummaryText>
              <SummaryPrice>$ -5.90</SummaryPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryText>Total</SummaryText>
              <SummaryPrice>$ 80</SummaryPrice>
            </SummaryItem>

            <SummaryButton>CHECKOUT NOW</SummaryButton>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
