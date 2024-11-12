import styled from "styled-components";

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
  background-attachment: fixed;
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

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
`;

const DropdownWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;

const SearchInput = styled.input`
  width: 482px;
  margin-top: 10px;
  margin-bottom: 25px;
  padding: 5px;
  border: none;
  border-radius: 6px;
  height: 35px;
  font-family: Korean-YGDL;
  font-size: 15px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

export { Container, BackgroundImage, Wrapper, OptionWrapper, DropdownWrapper, SearchInput, GridContainer };
