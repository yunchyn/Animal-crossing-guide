import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { villagers } from "animal-crossing";
import { personalityToKR, speciesToKR } from "../utilities";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100%;
  background-color: white;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 1160px;
  min-height: 100%;
  margin: 30px;
  border-radius: 22px;
  background-image: url("img/character-pattern.webp");
  opacity: 60%;
  background-size: cover;
  background-position: center;
  background-attachment: fixed; // 배경화면 위치 고정
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 950px;
  min-height: 100%;
  margin: 90px;
  z-index: 1;
`;

const VillagerImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const VillagerName = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const DetailText = styled.p`
  font-size: 16px;
  color: #555;
`;

export default function Villagers() {
  const { villager } = useParams();

  // Find the villager data using the name from URL parameter
  const villagerData = villagers.find((v) => v.name === villager);

  if (!villagerData) {
    return <Container>해당 주민을 찾을 수 없습니다.</Container>;
  }

  return (
    <Container>
      <Wrapper>
        <VillagerImage
          src={villagerData.iconImage}
          alt={villagerData.translations.kRko}
        />
        <VillagerName>{villagerData.translations.kRko}</VillagerName>
        <DetailText>종족: {speciesToKR(villagerData.species)}</DetailText>
        <DetailText>성격: {personalityToKR(villagerData.personality)}</DetailText>
        <DetailText>생일: {villagerData.birthday}</DetailText>
        <DetailText>말버릇: {villagerData.catchphrases.kRko}</DetailText>
      </Wrapper>
      <BackgroundImage />
    </Container>
  );
}
