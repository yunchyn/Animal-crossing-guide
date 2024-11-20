import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  height: 100%;
  padding: 30px 0px;
  background-color: #61d0d0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  z-index: 10;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;

  font-size: 13px;
  color: #0000006e;
`;

const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid #0000006e;
`;

const StyledLink = styled(Link)`
  padding: 0px 5px;
  text-decoration: none;
`;

export function Footer() {
  return (
    <Container>
      <Text>
        이 페이지는 모여봐요 동물의 숲의 팬 페이지로 비영리적 목적으로 제작되었으며 모든 저작권은 (주)닌텐도에 있습니다.
      </Text>
      <Border></Border>
      <Text>
        Data Source from <StyledLink to="https://api.nookipedia.com/">Nookipedia</StyledLink> |{" "}
        <StyledLink to="https://docs.google.com/spreadsheets/d/1mo7myqHry5r_TKvakvIhHbcEAEQpSiNoNQoIS8sMpvM/edit#gid=1397507627">
          Data Spreadsheet for ACNH
        </StyledLink>{" "}
        | API from <StyledLink to="https://github.com/Norviah/animal-crossing/tree/master">Norviah</StyledLink>
      </Text>
    </Container>
  );
}
