import { recipes } from "animal-crossing";
import { useState } from "react";
import Dropdown from "../components/dropdown";
import Pagination from "../components/pagination";
import { BackgroundImage, Container, DropdownWrapper, OptionWrapper, SearchInput, Text, Wrapper } from "../styled-list";
import RecipeCard from "../components/card/recipe-card";
import { categoryToKR, gridMotion } from "../utilities";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

export default function RecipeList() {
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12; // 페이지당 아이템 수

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0); // 검색할 때 페이지를 0으로 리셋
  };

  const recipeTypeOptions = [
    { value: "", label: "종류" },
    ...Array.from(new Set(recipes.map((r) => r.category))).map((type) => ({
      value: type,
      label: categoryToKR(type),
    })),
  ];

  // 검색/필터링된 값
  const filteredrecipes = recipes.filter((recipe) => {
    const matchesType = selectedType ? recipe.category === selectedType : true;
    const matchesSearch = recipe.translations.kRko.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesType && matchesSearch;
  });

  const pageCount = Math.ceil(filteredrecipes.length / itemsPerPage);
  const displayedrecipes = filteredrecipes.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 320); // 페이지 변경 시 스크롤 맨 위로 이동
  };

  return (
    <Container>
      <Helmet>
        <title>레시피 도감 - 모동숲 가이드</title>
      </Helmet>
      <Wrapper>
        <OptionWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedType}
              onChange={(option) => setSelectedType(option)}
              options={recipeTypeOptions}
              defaultText="종류"
            />
          </DropdownWrapper>
          <SearchInput
            type="text"
            placeholder="레시피의 이름으로 검색해 보세요."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </OptionWrapper>

        {displayedrecipes.length > 0 ? (
          <motion.div {...gridMotion}>
            <GridContainer>
              {displayedrecipes.map((recipe, index) => (
                <RecipeCard
                  key={index}
                  recipe={recipe}
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
