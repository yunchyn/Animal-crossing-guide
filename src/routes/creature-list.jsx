import { creatures } from "animal-crossing";
import { useState } from "react";
import Dropdown from "../components/dropdown";
import Pagination from "../components/pagination";
import CreatureCard from "../components/card/creature-card";
import { creatureTypeToKR, gridMotion } from "../utilities";
import {
  BackgroundImage,
  Container,
  DropdownWrapper,
  GridContainer,
  OptionWrapper,
  SearchInput,
  Text,
  Wrapper,
} from "../styled-list";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function CreatList() {
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 18; // 페이지당 아이템 수

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // 검색할 때 페이지를 0으로 리셋
  };

  const creatureTypeOptions = [
    { value: "", label: "종류" },
    ...Array.from(new Set(creatures.map((c) => c.sourceSheet))).map((type) => ({
      value: type,
      label: creatureTypeToKR(type),
    })),
  ];

  // 검색/필터링된 값
  const filteredCreatures = creatures.filter((creature) => {
    const matchesType = selectedType ? creature.sourceSheet === selectedType : true;
    const matchesSearch = creature.translations.kRko.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const pageCount = Math.ceil(filteredCreatures.length / itemsPerPage);
  const displayedCreatures = filteredCreatures.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 320); // 페이지 변경 시 스크롤 맨 위로 이동
  };

  return (
    <Container>
      <Helmet>
        <title>생물 도감 - 모동숲 가이드</title>
      </Helmet>
      <Wrapper>
        <OptionWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedType}
              onChange={(option) => setSelectedType(option)}
              options={creatureTypeOptions}
              defaultText="종류"
            />
          </DropdownWrapper>
          <SearchInput
            type="text"
            placeholder="생물의 이름으로 검색해 보세요."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </OptionWrapper>

        {displayedCreatures.length > 0 ? (
          <motion.div {...gridMotion}>
            <GridContainer>
              {displayedCreatures.map((creature, index) => (
                <CreatureCard
                  key={index}
                  creature={creature}
                />
              ))}
            </GridContainer>
          </motion.div>
        ) : (
          <Text>검색된 내용이 없습니다. 😢</Text>
        )}

        <Pagination
          pageCount={pageCount}
          onPageChange={handlePageClick}
        />
      </Wrapper>
      <BackgroundImage />
    </Container>
  );
}
