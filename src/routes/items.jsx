import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { items } from "animal-crossing";
import { BackgroundImage, Container, Wrapper } from "../styled-list";
import { colorToKR } from "../utilities";
import { Helmet } from "react-helmet-async";

const DetailCardContainer = styled.div`
  width: 982px;
  height: 623px;
  background-image: url("/img/item-detail-card.png");
  background-size: cover;
  border-radius: 50px 50px 0px 0px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;

const NameTag = styled.div`
  width: 400px;
  font-size: 25px;
  font-family: "Korean-YGDB";
  background-color: #fef7e4;
  padding: 20px 25px;
  border-radius: 33px;
`;

const NameTagContainer = styled.div`
  width: 100%;
  height: 120px;
  margin-left: 100px;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const DetailImg = styled.img`
  width: 200px;
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgContainer = styled.div`
  background-color: #fef6e1;
  border-radius: 18px;
  padding: 45px;
  margin: 20px 50px;
  width: 250px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PriceTag = styled.div`
  position: absolute;
  background-color: #80353f;
  color: #fef6e1;
  font-family: "Korean-YGDB";
  font-size: 26px;
  padding: 11px 55px 11px 30px;
  border-radius: 0px 13px 13px 0px;
`;

const ColorTagContainer = styled.div`
  height: 63px;
`;

const ColorTag = styled.div`
  position: absolute;
  background-color: #ffefc7;
  color: #7a6366;
  font-family: "Korean-YGDB";
  font-size: 22px;
  padding: 11px 40px 11px 30px;
  border-radius: 0px 13px 13px 0px;
`;

const VariationsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin: 0 auto;
  margin-top: 20px;
`;

const NoVariationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #373737;
  background-color: #ffefc7;
  border-radius: 18px;
  padding: 5px 10px;
  margin: 110px 100px;

  width: 290px;
  height: 50px;
`;

const VariationsImg = styled.img`
  width: 120px;
  height: 120px;
`;

const VariationsImgContainer = styled.div`
  background-color: #ffefc7;
  border-radius: 18px;
  padding: 5px 10px;
  width: 130px;
  height: 130px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VariationsColorTag = styled.div`
  position: absolute;
  background-color: #80353f;
  color: white;
  font-family: "Korean-YGDB";
  font-size: 18px;
  padding: 11px 20px;
  border-radius: 20px;
  margin-bottom: 130px;
  margin-right: 110px;
`;

const SourceTagContainer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: right;
`;

const SourceTag = styled.div`
  position: absolute;
  border-radius: 33px;
  background-color: #ffefc7;
  font-family: "Korean-YGDB";
  font-size: 22px;
  padding: 11px 30px 11px 30px;
  margin-right: 25px;
`;

export default function Items() {
  const { item } = useParams();
  const itemData = items.find((i) => i.name === item);
  const iconImgSrc =
    itemData.image ||
    itemData.storageImage ||
    itemData.framedImage ||
    itemData.inventoryImage ||
    (itemData.variations && itemData.variations.length > 0 && itemData.variations[0]?.image) ||
    (itemData.variations && itemData.variations.length > 0 && itemData.variations[0]?.storageImage);

  if (!itemData) {
    return (
      <Container>
        <Wrapper>해당 아이템을 찾을 수 없습니다.</Wrapper>
        <BackgroundImage />
      </Container>
    );
  }

  return (
    <Container>
      <Helmet>
        <title>{itemData.translations.kRko} - 모동숲 가이드</title>
      </Helmet>
      <Wrapper>
        <DetailCardContainer>
          <NameTagContainer>
            <NameTag>{itemData.translations.kRko}</NameTag>
          </NameTagContainer>
          <InfoContainer>
            <ImgWrapper>
              <PriceTag>{itemData.buy === -1 ? "비매품" : `${itemData.buy}벨`}</PriceTag>
              <ImgContainer>
                <DetailImg
                  src={iconImgSrc}
                  alt="detail-img"
                />
              </ImgContainer>
              {itemData.variations ? (
                <VariationsContainer>
                  {itemData.variations.slice(0, 6).map((variation, index) => (
                    <VariationsImgContainer key={index}>
                      <VariationsImg
                        src={variation.image || variation.closetImage || variation.storageImage}
                        alt="variation-img"
                      />
                      <VariationsColorTag>{colorToKR(variation.colors[0])}</VariationsColorTag>
                    </VariationsImgContainer>
                  ))}
                </VariationsContainer>
              ) : (
                <NoVariationsContainer>염색 파트가 존재하지 않는 아이템입니다.</NoVariationsContainer>
              )}
            </ImgWrapper>
            <ColorTagContainer>
              {itemData.variations && itemData.variations[0]?.colors ? (
                <ColorTag>{colorToKR(itemData.variations[0].colors[0])}</ColorTag>
              ) : itemData.colors ? (
                <ColorTag>{colorToKR(itemData.colors[0])}</ColorTag>
              ) : null}
            </ColorTagContainer>
            <SourceTagContainer>
              <SourceTag>획득 : {itemData.source}</SourceTag>
            </SourceTagContainer>
          </InfoContainer>
        </DetailCardContainer>
      </Wrapper>

      <BackgroundImage />
    </Container>
  );
}
