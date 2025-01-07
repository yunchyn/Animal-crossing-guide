import React from "react";
import { categoryToKR } from "../../utilities";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 425px;
  min-height: 100px;
  padding: 15px 20px;
  border: none;
  border-radius: 20px;
  background-color: #ffffffe7;

  text-decoration: none;
  color: inherit;
`;

const ImageContainer = styled.div`
  margin-right: 15px;
`;

const IconImage = styled.img`
  width: 110px;
  height: 110px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const MeterialsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2개씩 한 줄로 배치 */
  gap: 2px;
  width: 290px;
  margin-top: 10px;
`;

const VillagerName = styled.h1`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin: 0;
`;

const Tag = styled.div`
  width: 45px;
  padding: 3px 8px;

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

const NameTagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export default function RecipeCard({ recipe }) {
  const iconImgSrc =
    recipe.image ||
    recipe.storageImage ||
    recipe.framedImage ||
    recipe.inventoryImage ||
    (recipe.variations && recipe.variations.length > 0 && recipe.variations[0]?.image) ||
    (recipe.variations && recipe.variations.length > 0 && recipe.variations[0]?.storageImage);

  if (!iconImgSrc) return null;

  const recipeName = recipe.translations.kRko === "종류 없음" ? recipe.name : recipe.translations.kRko;

  return (
    <CardContainer to={`/item-list/${encodeURIComponent(recipe.name)}`}>
      <ImageContainer>
        <IconImage
          src={iconImgSrc}
          alt={recipeName}
        />
      </ImageContainer>
      <InfoContainer>
        <NameTagWrapper>
          <VillagerName>{recipeName}</VillagerName>
          <Tag>{categoryToKR(recipe.category)}</Tag>
        </NameTagWrapper>
        <MeterialsContainer>
          {Object.entries(recipe.materials).map(([material, quantity], index) => {
            const translatedMaterial = recipe.materialsTranslations?.[material]?.kRko || material;

            return (
              <DetailText key={index}>
                {translatedMaterial} <span style={{ fontWeight: "bold" }}>({quantity})</span>
              </DetailText>
            );
          })}
        </MeterialsContainer>
        {/* <DetailText>
          {Object.entries(recipe.materials).map(([material, quantity], index) => {
            const translatedMaterial = recipe.materialsTranslations?.[material]?.kRko || material;

            // 각 항목을 하나의 문자열로 결합
            const materialText = `${translatedMaterial}(${quantity})`;

            // 마지막 항목이 아니면 쉼표로 구분
            return `${materialText}${index < Object.entries(recipe.materials).length - 1 ? ", " : ""}`;
          })}
        </DetailText> */}
      </InfoContainer>
    </CardContainer>
  );
}
