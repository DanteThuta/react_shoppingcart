import styled from "styled-components";
import {
  Facebook,
  Pinterest,
  Instagram,
  MailOutline,
  Phone,
  Room,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  background-color: #f5fbfd;
`;

// Left Section
const Left = styled.div`
  flex: 1;
  padding: 15px;
`;

const Logo = styled.h1`
  font-size: 40px;
  margin-bottom: 10px;
`;

const Desc = styled.p`
  font-size: 24px;
`;

const Socialbar = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 5px;
  margin: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
`;

// Center Section
const Center = styled.div`
  flex: 1;
`;

const CTitle = styled.h1`
  font-size: 40px;
  padding: 15px;
`;

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  list-style: none;
  font-size: 20px;

  width: 50%;
  margin-bottom: 5px;

  cursor: pointer;
`;

// Right Section
const Right = styled.div`
  flex: 1;
`;

const RTitle = styled.h1`
  font-size: 40px;
  padding: 15px;
`;

const ContactItem = styled.div`
  /* padding: 10px; */
  margin: 10px;

  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  padding-right: 30px;
`;

const Payment = styled.div`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Content</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
          odio sed nulla distinctio cupiditate sint nostrum enim iste eveniet
          nemo.
        </Desc>
        <Socialbar>
          <SocialIcon color="#617bff">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#f72366">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="#f7992d">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#3b2d1d">
            <MailOutline />
          </SocialIcon>
          <SocialIcon color="#7cff73">
            <Phone />
          </SocialIcon>
        </Socialbar>
      </Left>
      <Center>
        <CTitle>Useful Links</CTitle>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <RTitle>Contact</RTitle>
        <ContactItem>
          <Icon>
            <Room />
          </Icon>
          622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Icon>
            <Phone />
          </Icon>
          +1 234 56 78
        </ContactItem>
        <ContactItem>
          <Icon>
            <MailOutline />
          </Icon>
          contact@dante.
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
