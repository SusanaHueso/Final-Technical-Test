import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***

const baseBooks = css`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
`;

const baseBook = css`
  position: relative;
  flex: calc(100% / 4); /* 3 images per row */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const baseBookSelected = css`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: nowrap;
  flex-direction: column;

  resize: horizontal;
  min-width: 1000px;
`;

// *** Components ***

const Books = styled.div`
  ${baseBooks}
`;
const Book = styled.div`
  ${baseBook}
`;

const BookSelected = styled.div`
  ${baseBookSelected}
`;

export const Styled = {
  BookSelected,

  Books,
  Book,
};
