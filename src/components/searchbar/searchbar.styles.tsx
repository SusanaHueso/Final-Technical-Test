import styled, { css } from "styled-components";
// *** Base ***
const baseSearchBar = css`
  flex-direction: row;

  flex-wrap: wrap;

  align-content: normal;

  justify-content: flex-start;

  align-items: flex-start;
`;

// *** Components ***
const SearchBar = styled.div`
  ${baseSearchBar}
`;

export const Styled = {
  SearchBar,
};
