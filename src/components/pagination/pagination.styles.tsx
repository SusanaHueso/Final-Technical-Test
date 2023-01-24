import styled, { css } from "styled-components";

// *** Base ***
const basePagination = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  padding-bottom: 16px;
`;

// *** Components ***
const Pagination = styled.div`
  ${basePagination};
`;

export const Styled = {
  Pagination,
};
