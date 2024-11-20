import React from "react";
import { personalityToKR, speciesToKR } from "../../utilities";
import {
  CardContainer,
  DetailText,
  GenderSymbol,
  ImageContainer,
  InfoContainer,
  Tag,
  VillagerImage,
  VillagerName,
} from "../../styled-card";

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
