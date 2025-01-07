import { Helmet } from "react-helmet-async";
import { Container, Wrapper } from "../styled-list";
import styled from "styled-components";

const EventImg = styled.img`
  width: 800px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 1160px;
  height: 90%;
  margin: 30px;
  border-radius: 22px;
  background-image: url("/img/character-pattern.webp");
  opacity: 60%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export default function EventList() {
  return (
    <Container>
      <Helmet>
        <title>이벤트 일정 - 모동숲 가이드</title>
      </Helmet>
      <Wrapper>
        <EventImg
          src="/img/event.png"
          alt="event-img"
        />
      </Wrapper>
      <BackgroundImage />
    </Container>
  );
}
