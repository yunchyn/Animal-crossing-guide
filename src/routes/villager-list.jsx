import { villagers } from "animal-crossing";
import styled from "styled-components";
import { useState } from "react";
import { personalityToKR, speciesToKR } from "../utilities";
import Dropdown from "../components/dropdown";
import VillagerCard from "../components/villager-card";

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

const OptionWrapper = styled.div``;

const DropdownWrapper = styled.div``;

const SearchInput = styled.input`
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

export default function VillagerList() {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedPersonality, setSelectedPersonality] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const speciesOptions = Array.from(new Set(villagers.map((v) => v.species))).map((species) => ({
    value: species,
    label: speciesToKR(species),
  }));

  const personalityOptions = Array.from(new Set(villagers.map((v) => v.personality))).map((personality) => ({
    value: personality,
    label: personalityToKR(personality),
  }));

  // 검색/필터링된 값
  const filteredVillagers = villagers.filter((villager) => {
    const matchesSpecies = selectedSpecies ? villager.species === selectedSpecies : true;
    const matchesPersonality = selectedPersonality ? villager.personality === selectedPersonality : true;
    const matchesSearch = villager.translations.kRko.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecies && matchesPersonality && matchesSearch;
  });

  return (
    <Container>
      <Wrapper>
        <OptionWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              options={speciesOptions}
              defaultText="종족"
            />
            <Dropdown
              value={selectedPersonality}
              onChange={(e) => setSelectedPersonality(e.target.value)}
              options={personalityOptions}
              defaultText="성격"
            />
          </DropdownWrapper>
          <SearchInput
            type="text"
            placeholder="주민의 이름으로 검색해 보세요."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </OptionWrapper>
        <GridContainer>
          {filteredVillagers.map((villager, index) => (
            <VillagerCard
              key={index}
              villager={villager}
            />
          ))}
        </GridContainer>
      </Wrapper>
      <BackgroundImage />
    </Container>
  );
}
