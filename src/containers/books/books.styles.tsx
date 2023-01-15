import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const baseBeneathHome = css`
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  height: 100vh;
  width: 100vw;
  background-size: cover !important;

  display: flex;

  flex-wrap: wrap;

  align-items: center;

  align-content: space-between;
  flex-direction: row;
`;

const baseBooks = css`
  top: 43px;
  position: relative;
  display: flex;
  height: 90vh;
  width: 100vw;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

const baseBook = css`
  position: relative;
  flex: calc(100% / 4); /* 3 images per row */
  min-width: 0;
  display: flex;
  flex-direction: row;
  align-content: stretch;
  justify-content: center;
`;

const baseBookSelected = css`
  position: relative;
  height: 90vh;
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

export const Styled = {
  BookSelected,
  BeneathHome,
  Books,
  Book,
};
