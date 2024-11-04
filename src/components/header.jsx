import styled from "styled-components";
import Menubar from "./menubar";
import { Link } from "react-router-dom";

const TitleImgContainer = styled(Link)`
  padding-top: 70px;
  padding-bottom: 15px;
  text-decoration: none;
  color: inherit;
`;

const TitleImg = styled.img`
  width: 290px;
`;

export default function Header() {
  return (
    <>
      <TitleImgContainer to="/">
        <TitleImg
          src="img/title.png"
          alt="title"
        />
        가이드 팬 페이지
      </TitleImgContainer>
      <Menubar />
    </>
  );
}
