import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  padding: 15px;
  margin: 3px;
  height: 70vh;

  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  top: 0;
  left: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.h3`
  font-size: 34px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 800;
  color: #fff;
`;

const Button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 15px;
  background-color: #fff;
  color: black;

  font-weight: 500;
  text-transform: uppercase;

  cursor: pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Text>{item.title}</Text>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
