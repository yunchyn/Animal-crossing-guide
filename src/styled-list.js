import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: white;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 1160px;
  height: 70.5%;
  margin: 30px;
  border-radius: 22px;
  background-image: url("/img/character-pattern.webp");
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
  min-height: 250px;
  height: 100%;
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

// const GridContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
//   gap: 20px;
//   width: 100%;
//   margin-top: 20px;
// `;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 한 줄에 3개 */
  gap: 20px;
  width: 100%;
  margin-top: 20px;
`;

const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  color: #686868;
  padding: 30px;
`;

export { Container, BackgroundImage, Wrapper, OptionWrapper, DropdownWrapper, SearchInput, GridContainer, Text };
