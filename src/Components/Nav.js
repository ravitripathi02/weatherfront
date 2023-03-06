import Favourate from "./Balloon";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background-color: black;
  color: white;
  padding: 10px;
  font-size: 25px;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HomeBtn = styled.button``;
const FavBtn = styled.button``;
const Btn = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  gap: 30px;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Nav = () => {
  return (
    <Header>
      <AppName>React Movie App</AppName>
      <Btn>
        <HomeBtn>
          <StyledLink to="/">Home</StyledLink>
        </HomeBtn>
        <FavBtn>
          <StyledLink to="./Favourate">Balloon</StyledLink>
        </FavBtn>
      </Btn>
    </Header>
  );
};
export default Nav;
