import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { villagers } from "animal-crossing";
import { getVillagerStandingImg, personalityToKR, speciesToKR } from "../utilities";
import { BackgroundImage, Container, Wrapper } from "../styled-list";

const DetailCardWrapper = styled.div`
  width: 871px;
  height: 623px;
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

const StandingImageContainer = styled.div`
  width: 100%;
  height: 314px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StandingImage = styled.img`
  height: 268px;
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
  width: 100px;
  padding: 5px 0px;
  border-radius: 12px;
  border: 2px solid #ddd;
  background-color: ${({ bgColor }) => bgColor || "#ddd"};
  text-align: center;
  font-size: 17px;
`;

const DetailCardImage = styled.img`
  position: absolute;
  width: 871px;
  height: 623px;
  z-index: -1;
`;

export default function Villagers() {
  const [isLoading, setIsLoading] = useState(false);
  const { villager } = useParams();
  const [standingImg, setStandingImg] = useState(null);

  // Find the villager data using the name from URL parameter
  const villagerData = villagers.find((v) => v.name === villager);
  console.log(getVillagerStandingImg(villager));

  // 스탠딩 이미지는 따로 가져옴
  useEffect(() => {
    setIsLoading(true);
    const fetchImage = async () => {
      const img = await getVillagerStandingImg(villager);
      setStandingImg(img);
    };
    fetchImage();
    setIsLoading(false);
  }, [villager]);

  if (!villagerData) {
    return <Container>해당 주민을 찾을 수 없습니다.</Container>;
  }
  return (
    <Container>
      <Wrapper>
        <DetailCardWrapper>
          <ProfileContainer>
            <NameTitle>{villagerData.translations.kRko}</NameTitle>
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
                <Tag bgColor="white">{personalityToKR(villagerData.personality)}</Tag>
              </DescItem>
              <DescItem>{villagerData.birthday}</DescItem>
              <DescItem>{villagerData.catchphrases.kRko}</DescItem>
            </DescContainer>
          </ProfileContainer>
        </DetailCardWrapper>
        <DetailCardImage
          src="img/villager-detail-card.png"
          alt="detail-card"
        />
      </Wrapper>

      <BackgroundImage />
    </Container>
  );
}
