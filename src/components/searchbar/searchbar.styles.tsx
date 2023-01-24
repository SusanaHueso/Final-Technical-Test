import styled, { css } from "styled-components";
// *** Base ***
const baseSearchBar = css`
  display: flex;
`;

const baseStyledLabel = css`
  margin-right: 12px;
  font-family: cursive;
  font-weight: bold;
  background: linear-gradient(
    0deg,
    rgb(22 0 255) 0%,
    rgb(164 106 232 / 42%) 0%,
    rgb(228 187 82 / 66%) 100%
  );
  font-weight: bold;
  border-style: double;
  border-color: #d7d592;
  width: 3vw;
  display: flex;
  justify-content: center;
`;

// *** Components ***
const SearchBar = styled.div`
  ${baseSearchBar}
`;

const StyledLabel = styled.label`
  ${baseStyledLabel}
`;

export const Styled = {
  SearchBar,
  Label: StyledLabel,
};
