import styled, { css } from "styled-components";

// *** Base ***

const baseCoverBackGround = css`
  background-color: brown;
  border: 1mm ridge rgba(211, 220, 50, 0.6);
`;
const baseCoverLetters = css`
  color: white;
`;

// *** Components ***
const CoverBackGround = styled.div<{ $backgroundImage: any }>`
  ${baseCoverBackGround}
  background-image: url(${({ $backgroundImage }: any) => $backgroundImage});
  background-size: cover;
`;

const CoverLetters = styled.div`
  ${baseCoverLetters}
`;

export const Styled = {
  CoverBackGround,
  CoverLetters,
};
