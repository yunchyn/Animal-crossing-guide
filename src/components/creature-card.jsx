import React from "react";
import {
  CardContainer,
  DetailText,
  ImageContainer,
  InfoContainer,
  Tag,
  VillagerImage,
  VillagerName,
} from "../styled-card";
import { catchAreaToKR, creatureTypeToKR } from "../utilities";

export default function CreatureCard({ creature }) {
  //   const genderSymbol = villager.gender === "Male" ? "♂" : "♀";

  return (
    <CardContainer to={`/${creature.name}`}>
      <ImageContainer>
        <VillagerImage
          src={creature.iconImage}
          alt={creature.translations.kRko}
        />
      </ImageContainer>
      <InfoContainer>
        <VillagerName>{creature.translations.kRko}</VillagerName>
        <Tag>{creatureTypeToKR(creature.sourceSheet)}</Tag>
        {/* <Tag>{catchAreaToKR(creature.whereHow)}</Tag> */}
        {creature.sourceSheet !== "Sea Creatures" && (
          <DetailText>서식지: {catchAreaToKR(creature.whereHow)}</DetailText>
        )}
        <DetailText>포획률: {creature.spawnRates}%</DetailText>
      </InfoContainer>
    </CardContainer>
  );
}
