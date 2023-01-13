import HTMLFlipBook from "react-pageflip";
import styled, { css } from "styled-components";

// *** Base ***
const basePageBackGround = css`
  background: linear-gradient(
    99deg,
    rgba(230, 208, 121, 1) 0%,
    rgba(255, 252, 197, 1) 51%,
    rgba(230, 208, 121, 1) 100%
  );
`;

const baseBook = css`
  padding-left: 25px;
  padding-right: 10px;
  margin-bottom: 50px;
  margin-right: 280px;
  &:hover {
    transition: transform 2s;
    transform: rotate3d(-3, 2, 0.5, 0.5rad);
  }
`;

const baseCoverBackGround = css`
  background-color: brown;
  border: 1mm ridge rgba(211, 220, 50, 0.6);
`;
const baseBigBook = css`
  position: relative;
`;

// *** Components ***
const CoverBackGround = styled.div`
  ${baseCoverBackGround}
`;
const PageBackGround = styled.div`
  ${basePageBackGround}
`;
const Book = styled(HTMLFlipBook)`
  ${baseBook}
`;
const BigBook = styled(HTMLFlipBook)`
  ${baseBigBook}
`;

export const Styled = {
  PageBackGround,
  Book,
  BigBook,
  CoverBackGround,
};
