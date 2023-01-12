import HTMLFlipBook from "react-pageflip";
import styled, { css } from "styled-components";

// *** Base ***
const basePageBackGround = css`
  background-color: #d9c7a5;
`;

const baseBook = css`
  padding-left: 25px;
  padding-right: 10px;
  margin-bottom: 50px;
  margin-right: 280px;

  &:hover {
    transition: transform 2s;
    transform: rotate3d(2, -1, -1, -0.2turn);
  }
`;

// *** Components ***
const PageBackGround = styled.div`
  ${basePageBackGround}
`;

const Book = styled(HTMLFlipBook)`
  ${baseBook}
`;

export const Styled = {
  PageBackGround,
  Book,
};
