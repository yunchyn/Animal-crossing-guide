import { Link } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled(Link)`
  display: flex;
  align-items: center;
  width: 265px;
  min-height: 100px;
  padding: 20px;
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
  width: 70px;
  height: 70px;
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

export {
  CardContainer,
  ImageContainer,
  IconImage as VillagerImage,
  InfoContainer,
  VillagerName,
  GenderSymbol,
  Tag,
  DetailText,
};
