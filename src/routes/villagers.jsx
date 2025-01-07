import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { villagers } from "animal-crossing";
import { findKKMusic, getVillagerStandingImg, personalityToKR, speciesToKR } from "../utilities";
import { BackgroundImage, Container, Wrapper } from "../styled-list";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../loader";
import { Helmet } from "react-helmet-async";

const DetailCardWrapper = styled.div`
  width: 871px;
  height: 623px;
  display: flex;
  flex-direction: row;
`;

const ProfileContainer = styled.div`
  width: 310px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NameTitle = styled.div`
  font-size: 24px;
  width: 100%;
  height: 81px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenderSymbol = styled.span`
  margin-left: 3px;
  font-weight: bold;
  color: ${({ gender }) => (gender === "Male" ? "#1E90FF" : "#FF69B4")};
`;

const StandingImageContainer = styled.div`
  width: 100%;
  height: 314px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StandingImage = styled.img`
  height: 260px;
  object-fit: contain;
`;

const DescContainer = styled.div`
  width: 198px;
  height: 228px;
  margin-left: 112px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

const DescItem = styled.div`
  width: 190px;
  height: 50px;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tag = styled.div`
  width: 90px;
  padding: 5px 0px;
  border-radius: 12px;
  border: 2px solid #ddd;
  background-color: ${({ bgcolor }) => bgcolor || "#ddd"};
  text-align: center;
  font-size: 16px;
`;

//

const InfoContainer = styled.div`
  width: 561px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ComponentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const TitleTag = styled.div`
  font-family: "Korean-YGDB";
  font-size: 20px;
  border-radius: 21px;
  background-color: #f9e2a6;
  padding: 16px 32px;
  width: 40px;
  text-align: center;
`;

const LongTitleTag = styled.div`
  font-family: "Korean-YGDB";
  font-size: 20px;
  border-radius: 21px;
  background-color: #f9e2a6;
  padding: 16px 7px;
  width: 125px;
  text-align: center;
`;

const ImgWrapper = styled.div`
  border-radius: 21px;
  background-color: #fef6e1;
  padding: 20px;
  min-width: 150px;
  min-height: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: #6d6d6d;
`;

const FavColor = styled.div`
  svg {
    width: 68px;
  }
  rect {
    fill: ${({ color }) => color || "#000"};
  }
`;

const PhotoImg = styled.img`
  border-radius: 21px;
  width: 150px;
`;

const HouseImg = styled.img`
  width: 220px;
  height: 150px;
  object-fit: cover;
`;

const DetailCardImage = styled.img`
  position: absolute;
  width: 871px;
  height: 623px;
  z-index: -2;
`;

const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Villagers() {
  const { villager } = useParams();

  const villagerData = villagers.find((v) => v.name === villager);

  // 스탠딩 이미지 캐싱을 위해 usequery 사용
  const { data: standingImg, isLoading: isStandingImgLoading } = useQuery({
    queryKey: ["villagerStandingImg", villager],
    queryFn: () => getVillagerStandingImg(villager),
    cacheTime: Infinity,
    staleTime: Infinity,
  });

  const findedMusic = villagerData ? findKKMusic(villagerData.favoriteSong) : null;

  // 전체 로딩이 끝나면 주민 카드를 보여줌
  const isLoading = isStandingImgLoading || !villagerData || !findedMusic;

  if (isLoading) {
    return (
      <Container>
        <Wrapper>
          <DetailCardWrapper>
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          </DetailCardWrapper>
        </Wrapper>
        <BackgroundImage />
      </Container>
    );
  }

  const genderSymbol = villagerData.gender === "Male" ? "♂" : "♀";

  return (
    <Container>
      <Helmet>
        <title>{villagerData.translations.kRko} - 모동숲 가이드</title>
      </Helmet>
      <Wrapper>
        <DetailCardWrapper>
          <ProfileContainer>
            <NameTitle>
              {villagerData.translations.kRko}
              <GenderSymbol gender={villagerData.gender}>{genderSymbol}</GenderSymbol>
            </NameTitle>
            <StandingImageContainer>
              <StandingImage
                src={standingImg}
                alt="Standing Image"
              />
            </StandingImageContainer>
            <DescContainer>
              <DescItem>
                <Tag>{speciesToKR(villagerData.species)}</Tag>
              </DescItem>
              <DescItem>
                <Tag bgcolor="white">{personalityToKR(villagerData.personality)}</Tag>
              </DescItem>
              <DescItem>{villagerData.birthday}</DescItem>
              <DescItem>{villagerData.catchphrases.kRko}</DescItem>
            </DescContainer>
          </ProfileContainer>

          <InfoContainer>
            <ComponentWrapper>
              <ComponentBox>
                <TitleTag>사진</TitleTag>
                <ImgWrapper>
                  <PhotoImg
                    src={villagerData.photoImage}
                    alt="photo"
                  />
                </ImgWrapper>
              </ComponentBox>
              <ComponentBox>
                <LongTitleTag>좋아하는 색</LongTitleTag>
                <ImgWrapper>
                  <FavColor color={villagerData.colors[0]}>
                    <svg
                      width="93"
                      height="81"
                      viewBox="0 0 93 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14"
                        width="79"
                        height="54"
                        rx="25"
                        fill="#D9D9D9"
                      />
                      <rect
                        y="27"
                        width="79"
                        height="54"
                        rx="25"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </FavColor>
                  <FavColor color={villagerData.colors[1]}>
                    <svg
                      width="93"
                      height="81"
                      viewBox="0 0 93 81"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="14"
                        width="79"
                        height="54"
                        rx="25"
                        fill="#D9D9D9"
                      />
                      <rect
                        y="27"
                        width="79"
                        height="54"
                        rx="25"
                        fill="#D9D9D9"
                      />
                    </svg>
                  </FavColor>
                </ImgWrapper>
              </ComponentBox>
            </ComponentWrapper>
            <ComponentWrapper>
              <ComponentBox>
                <TitleTag>집</TitleTag>
                <ImgWrapper>
                  {villagerData.houseImage ? (
                    <HouseImg
                      src={villagerData.houseImage}
                      alt="house"
                    />
                  ) : (
                    "데이터가 제공되지 않습니다. 😢"
                  )}
                </ImgWrapper>
              </ComponentBox>
              <ComponentBox>
                <LongTitleTag>좋아하는 노래</LongTitleTag>
                <ImgWrapper>
                  <PhotoImg
                    src={findedMusic.albumImage}
                    alt="album-photo"
                  />
                </ImgWrapper>
              </ComponentBox>
            </ComponentWrapper>
          </InfoContainer>
        </DetailCardWrapper>
        <DetailCardImage
          src="/img/villager-detail-card.png"
          alt="detail-card"
        />
      </Wrapper>

      <BackgroundImage />
    </Container>
  );
}
