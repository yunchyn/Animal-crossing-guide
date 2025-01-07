import React from "react";
import {
  CardContainer,
  DetailText,
  ImageContainer,
  InfoContainer,
  Tag,
  VillagerImage,
  VillagerName,
} from "../../styled-card";
import { itemTypeToKR } from "../../utilities";

export default function ItemCard({ item }) {
  const iconImgSrc =
    item.image ||
    item.storageImage ||
    item.framedImage ||
    item.inventoryImage ||
    (item.variations && item.variations.length > 0 && item.variations[0]?.image) ||
    (item.variations && item.variations.length > 0 && item.variations[0]?.storageImage);

  if (!iconImgSrc) return null;
  if (item.sourceSheet === "Message Cards") return null; // 데이터 오류 있어서 null처리

  return (
    <CardContainer to={`/item-list/${encodeURIComponent(item.name)}`}>
      <ImageContainer>
        <VillagerImage
          src={iconImgSrc}
          alt={item.translations.kRko}
        />
      </ImageContainer>
      <InfoContainer>
        <VillagerName>{item.translations.kRko}</VillagerName>
        <Tag>{itemTypeToKR(item.sourceSheet)}</Tag>
        {item.seriesTranslations?.kRko && <Tag>{item.seriesTranslations.kRko}</Tag>}
        <DetailText>구매가: {item.buy === -1 ? "비매품" : `${item.buy}벨`}</DetailText>
        <DetailText>판매가: {!item.sell ? "비매품" : `${item.sell}벨`}</DetailText>
      </InfoContainer>
    </CardContainer>
  );
}
