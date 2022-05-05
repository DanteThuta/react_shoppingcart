import styled from "styled-components";
import { Add, Remove } from "@material-ui/icons";
import Navbar from "../components/Navbar";
import Annoucement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  padding: 50px;
`;

const ImgContainer = styled.div`
  flex: 1;
  margin-top: 20px;
  margin-left: 40px;
`;
const Image = styled.img`
  width: 400px;
  height: 60vh;
`;
const InfoContainer = styled.div`
  padding: 20px;
  flex: 1;
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 18px;
  /* font-weight: bold; */
`;

const Price = styled.h1`
  font-size: 28px;
  font-weight: bold;
`;

// Filter Section
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 15px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterText = styled.p`
  font-size: 20px;
  margin-right: 10px;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 5px;
  margin-top: 5px;
  background-color: ${(props) => props.color};
`;
const FilterSelect = styled.select`
  padding: 10px;
`;
const FilterOption = styled.option``;

// Amount Section

const AddContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const AmtContainer = styled.div`
  display: flex;

  align-items: center;
  margin-right: 20px;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border: 1px solid teal;

  margin: 0 10px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  padding: 10px 15px;
  border: 1px solid teal;
  background-color: white;
  cursor: pointer;

  &hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>

        <InfoContainer>
          <Title>Tital Jean</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
            deserunt corporis hic animi error numquam nulla inventore a, atque
            laudantium qui soluta eius voluptatum iusto labore?
          </Desc>
          <Price>$ 25</Price>
          <FilterContainer>
            {/* Color Section */}
            <Filter>
              <FilterText>Color: </FilterText>

              <FilterColor color="darkgray"></FilterColor>
              <FilterColor color="blue"></FilterColor>
              <FilterColor color="red"></FilterColor>
            </Filter>
            {/* Size Section */}
            <Filter>
              <FilterText>Size:</FilterText>
              <FilterSelect>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
              </FilterSelect>
            </Filter>
          </FilterContainer>
          {/* Add Section */}
          <AddContainer>
            <AmtContainer>
              <Remove style={{ cursor: "pointer" }} />
              <Amount>0</Amount>
              <Add style={{ cursor: "pointer" }} />
            </AmtContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
