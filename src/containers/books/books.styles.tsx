import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const baseBeneathHome = css`
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  height: 100%;
  width: 100%;
  background-size: cover !important;
  position: absolute;
  display: flex;

  flex-wrap: wrap;

  align-items: center;
  align-content: center;
  flex-direction: row;

  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
  display: flex;
  flex-flow: column no-wrap;
  justify-content: space-between;
`;
const baseBooksAndPagination = css`
  height: 100%;
  width: 100%;
`;
const baseBooks = css`
  top: 73px;
  position: absolute;
  display: flex;
  height: 90%;
  width: 100vw;
  flex-wrap: wrap;
  align-content: stretch;
`;

const baseBook = css`
  position: relative;
  flex: calc(100% / 4); /* 3 images per row */
  min-width: 0;
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
  hight: 90%;
  width: 70vw;
  left: 250px;
  resize: horizontal;
  min-width: 1000px;
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;

const Books = styled.div`
  ${baseBooks}
`;
const Book = styled.div`
  ${baseBook}
`;

const BookSelected = styled.div`
  ${baseBookSelected}
`;

const BooksAndPagination = styled.div`
  ${baseBooksAndPagination}
`;
export const Styled = {
  BookSelected,
  BeneathHome,
  Books,
  Book,
  BooksAndPagination,
};
