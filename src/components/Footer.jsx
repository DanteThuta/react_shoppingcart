import styled from "styled-components";
import {
  Facebook,
  Pinterest,
  Instagram,
  MailOutline,
  Phone,
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
`;

// Right Section
const Right = styled.div``;

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
        <CTitle>Hello</CTitle>
      </Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
