import styled, { css } from "styled-components";
// *** Base ***
const baseSearchBar = css`
  // margin-bottom: 57px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;

  position: relative;
`;

// *** Components ***
const SearchBar = styled.div`
  ${baseSearchBar}
`;

export const Styled = {
  SearchBar,
};
