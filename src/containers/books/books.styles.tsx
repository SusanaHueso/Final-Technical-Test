import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***

const baseBooks = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: normal;
  margin-bottom: 2em;
  margin-top: 2em;
}
`;

const baseBook = css`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: normal;
  justify-content: center;
  align-items: flex-start;
`;

const baseBookSelected = css`
  //min-width: 1000px;

  // left: 14vw;
  position: relative;
  margin-top: 34px;
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
