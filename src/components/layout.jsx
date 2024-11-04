import styled from "styled-components";
import Header from "./header";
import { Outlet } from "react-router-dom";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1240px;
  min-height: 100vh;
  z-index: 1;
`;

const Overlay = styled.div`
  position: absolute;
  display: flex;
  width: 1240px;
  min-height: 100%;
  background: #ffffff;
  opacity: 0.5;
  z-index: -1;
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100%;
  background-image: url("img/nook-pattern.webp");
  background-size: cover;
  background-position: center;
  background-attachment: fixed; // 배경화면 위치 고정
  z-index: -2;
`;

export default function Layout() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Header />
        <Outlet /> {/* 칠드런 렌더 */}
      </Wrapper>
      <Overlay />
      <BackgroundImage />
    </LayoutContainer>
  );
}
