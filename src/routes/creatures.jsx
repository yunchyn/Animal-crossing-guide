import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { creatures } from "animal-crossing";
import { BackgroundImage, Container, Wrapper } from "../styled-list";
import { catchAreaToKR, difficultyToKR } from "../utilities";

const DetailCardContainer = styled.div`
  width: 820px;
  height: 590px;
  background-image: url("/img/creature-detail-card.png");
  border-radius: 47px 47px 0 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const NameTag = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 20px;
  border-radius: 8px;
  background-color: #fef6e1;
  font-size: 19px;

  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.25);
  transform: rotate(-4deg);
`;

const ImgContainer = styled.div`
  margin-top: 60px;
  height: 200px;
`;

const CreatureImg = styled.img`
  height: 150px;
  max-width: 300px;
  object-fit: contain;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 5px rgba(0, 0, 0, 0.25));
`;

const CreatrueInfoContainer = styled.div``;

const TitleTag = styled.div`
  font-family: "Korean-YGDB";
  font-size: 20px;
  border-radius: 21px;
  background-color: #fef6e1;
  padding: 14px 0px;
  width: 100px;
  text-align: center;
`;

const CalenderContainer = styled.div`
  width: 300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7px;
  margin-top: 10px;
  background-color: #ffe49b;
  padding: 15px 20px;
  border-radius: 21px;
`;

const MonthItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 13px;
  border-radius: 21px;
  font-family: "Korean-YGDB";
  font-size: 16px;

  box-shadow: ${(props) => (props.isActive ? "0 0 0 4px #f05555 inset" : "none")};
  background-color: ${(props) => (props.isActive ? "#ffd362" : "#fef6e1")};
`;

const ComponentBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const DescBox = styled.div`
  margin-top: 10px;
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  font-size: 19px;
`;

export default function Creatures() {
  const { creature } = useParams();
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

  const creatureData = creatures.find((c) => c.name === creature);

  if (!creatureData) {
    return (
      <Container>
        <Wrapper>해당 생물을 찾을 수 없습니다.</Wrapper>
        <BackgroundImage />
      </Container>
    );
  }

  const catchMonths = creatureData.hemispheres.north.monthsArray;

  return (
    <Container>
      <Wrapper>
        <NameTag>{creatureData.translations.kRko}</NameTag>
        <DetailCardContainer>
          <ImgContainer>
            <CreatureImg
              src={creatureData.critterpediaImage}
              alt="creature-img"
            />
          </ImgContainer>
          <CreatrueInfoContainer>
            <TitleTag>서식 시기</TitleTag>
            <ComponentBox>
              <CalenderContainer>
                {months.map((month, index) => (
                  <MonthItem
                    key={index}
                    isActive={catchMonths.includes(index + 1)}
                  >
                    {month}
                  </MonthItem>
                ))}
              </CalenderContainer>
              <DescBox>
                <DescWrapper>
                  <TitleTag>출현 시간</TitleTag>
                  {creatureData.hemispheres.north.time[0] === "All day"
                    ? "하루 종일"
                    : creatureData.hemispheres.north.time}
                </DescWrapper>
                {creatureData.sourceSheet !== "Sea Creatures" && (
                  <DescWrapper>
                    <TitleTag>서식지</TitleTag> {catchAreaToKR(creatureData.whereHow)}
                  </DescWrapper>
                )}
                {creatureData.sourceSheet === "Fish" && (
                  <DescWrapper>
                    <TitleTag>난이도</TitleTag> {difficultyToKR(creatureData.catchDifficulty)}
                  </DescWrapper>
                )}
              </DescBox>
            </ComponentBox>
          </CreatrueInfoContainer>
        </DetailCardContainer>
      </Wrapper>

      <BackgroundImage />
    </Container>
  );
}
