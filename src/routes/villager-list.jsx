import { villagers } from "animal-crossing";
import { useState } from "react";
import { personalityToKR, speciesToKR } from "../utilities";
import Dropdown from "../components/dropdown";
import VillagerCard from "../components/card/villager-card";
import Pagination from "../components/pagination";
import {
  BackgroundImage,
  Container,
  DropdownWrapper,
  GridContainer,
  OptionWrapper,
  SearchInput,
  Wrapper,
} from "../styled-list";

export default function VillagerList() {
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedPersonality, setSelectedPersonality] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 18; // 페이지당 아이템 수

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // 검색할 때 페이지를 0으로 리셋
  };

  const speciesOptions = [
    { value: "", label: "종족" },
    ...Array.from(new Set(villagers.map((v) => v.species))).map((species) => ({
      value: species,
      label: speciesToKR(species),
    })),
  ];

  const personalityOptions = [
    { value: "", label: "성격" },
    ...Array.from(new Set(villagers.map((v) => v.personality))).map((personality) => ({
      value: personality,
      label: personalityToKR(personality),
    })),
  ];

  // 검색/필터링된 값
  const filteredVillagers = villagers.filter((villager) => {
    const matchesSpecies = selectedSpecies ? villager.species === selectedSpecies : true;
    const matchesPersonality = selectedPersonality ? villager.personality === selectedPersonality : true;
    const matchesSearch = villager.translations.kRko.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSpecies && matchesPersonality && matchesSearch;
  });

  const pageCount = Math.ceil(filteredVillagers.length / itemsPerPage);
  const displayedVillagers = filteredVillagers.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 320); // 페이지 변경 시 스크롤 맨 위로 이동
  };

  return (
    <Container>
      <Wrapper>
        <OptionWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedSpecies}
              onChange={(option) => setSelectedSpecies(option)}
              options={speciesOptions}
              defaultText="종족"
            />
            <Dropdown
              value={selectedPersonality}
              onChange={(option) => setSelectedPersonality(option)}
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
          {displayedVillagers.map((villager, index) => (
            <VillagerCard
              key={index}
              villager={villager}
            />
          ))}
        </GridContainer>
        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      </Wrapper>
      <BackgroundImage />
    </Container>
  );
}
