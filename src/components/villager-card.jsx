import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { personalityToKR, speciesToKR } from "../utilities";

const CardContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 265px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background-color: #ffffffe7;

  text-decoration: none;
  color: inherit;
`;

const ImageContainer = styled.div`
  margin-right: 15px;
`;

const VillagerImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const VillagerName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0;
`;

const GenderSymbol = styled.span`
  margin-left: 5px;
  font-size: 16px;
  color: ${({ gender }) => (gender === "Male" ? "#1E90FF" : "#FF69B4")};
`;

const Tag = styled.div`
  width: 45px;
  padding: 3px 8px;
  margin: 5px 5px 0 0;
  border-radius: 12px;
  background-color: #ddd;
  font-size: 12px;
  color: #555;
  text-align: center;
`;

const DetailText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 5px 0 0 0;
`;

export default function VillagerCard({ villager }) {
  const genderSymbol = villager.gender === "Male" ? "♂" : "♀";

  return (
    <CardContainer to={`${villager.name}`}>
      <ImageContainer>
        <VillagerImage
          src={villager.iconImage}
          alt={villager.translations.kRko}
        />
      </ImageContainer>
      <InfoContainer>
        <VillagerName>
          {villager.translations.kRko}
          <GenderSymbol gender={villager.gender}>{genderSymbol}</GenderSymbol>
        </VillagerName>
        <Tag>{speciesToKR(villager.species)}</Tag>
        <Tag>{personalityToKR(villager.personality)}</Tag>
        <DetailText>생일: {villager.birthday}</DetailText>
        <DetailText>말버릇: {villager.catchphrases.kRko}</DetailText>
      </InfoContainer>
    </CardContainer>
  );
}