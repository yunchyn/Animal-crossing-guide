import { items } from "animal-crossing";
import { useState } from "react";
import Dropdown from "../components/dropdown";
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
import { itemTypeToKR } from "../utilities";
import ItemCard from "../components/card/item-card";
import styled from "styled-components";

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #686868;
  padding: 30px;
`;

export default function ItemList() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSubType, setSelectedSubType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 18;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(0);
  };

  const itemTypeOptions = [
    { value: "", label: "종류" },
    ...Array.from(new Set(items.map((i) => i.sourceSheet))).map((type) => ({
      value: type,
      label: itemTypeToKR(type),
    })),
  ];

  // 선택한 대분류 타입에 따라 소분류 옵션 설정
  const subTypeOptions = {
    Housewares: [
      { value: "", label: "소분류" },
      ...Array.from(new Set(items.filter((i) => i.sourceSheet === "Housewares").map((i) => i.series)))
        .map((subType) => ({
          value: subType,
          label: items.find((i) => i.series === subType && i.sourceSheet === "Housewares")?.seriesTranslations?.kRko,
        }))
        .filter((item) => item.label != null),
    ],
  };

  const currentSubTypeOptions = selectedType ? subTypeOptions[selectedType] || [] : [];

  const filteredItems = items.filter((item) => {
    const matchesType = selectedType ? item.sourceSheet === selectedType : true;
    const matchesSubType = selectedSubType ? item.series === selectedSubType : true;
    const matchesSearch =
      item.translations && item.translations.kRko
        ? item.translations.kRko.toLowerCase().includes(searchTerm.toLowerCase())
        : false;
    return matchesType && matchesSubType && matchesSearch;
  });

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
    window.scrollTo(0, 320);
  };

  return (
    <Container>
      <Wrapper>
        <OptionWrapper>
          <DropdownWrapper>
            <Dropdown
              value={selectedType}
              onChange={(option) => {
                setSelectedType(option);
                setSelectedSubType("");
              }}
              options={itemTypeOptions}
              defaultText="종류"
            />
            <Dropdown
              value={selectedSubType}
              onChange={(option) => setSelectedSubType(option)}
              options={currentSubTypeOptions}
              defaultText="소분류"
            />
          </DropdownWrapper>
          <SearchInput
            type="text"
            placeholder="아이템의 이름으로 검색해 보세요."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </OptionWrapper>

        {displayedItems.length > 0 ? (
          <GridContainer>
            {displayedItems.map((item, index) => (
              <ItemCard
                key={index}
                item={item}
              />
            ))}
          </GridContainer>
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
