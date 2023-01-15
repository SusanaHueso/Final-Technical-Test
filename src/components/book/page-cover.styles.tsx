import styled, { css } from "styled-components";

// *** Base ***

const baseCoverBackGround = css`
  background-color: brown;
  border: 1mm ridge rgba(211, 220, 50, 0.6);
`;

// *** Components ***
const CoverBackGround = styled.div`
  ${baseCoverBackGround}
`;

export const Styled = {
  CoverBackGround,
};
