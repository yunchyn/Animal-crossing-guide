import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #61d0d0;
  width: 100%;
  min-height: 80px;
`;

const MenuIcon = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export default function Menubar() {
  return (
    <Container>
      <MenuIcon to="/villager-list">주민 일람</MenuIcon>
      <MenuIcon>생물 도감</MenuIcon>
      <MenuIcon>아이템 카탈로그</MenuIcon>
      <MenuIcon>레시피 도감</MenuIcon>
      <MenuIcon>이벤트 일정</MenuIcon>
    </Container>
  );
}
