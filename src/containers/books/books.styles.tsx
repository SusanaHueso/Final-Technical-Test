import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const baseBeneathHome = css`
  height: 100vh;
  width: 100vw;
  background-size: cover !important;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  overflow: hidden;
  align-content: flex-start;
`;

const baseBooks = css`
  margin-right: 200px;
  top: 43px;
  position: relative;
  display: flex;
  height: 90vh;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-around;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

const baseBookSelected = css`
  top: 43px;
  position: relative;
  height: 100vh;
  width: 70vw;
`;

const baseHeaderPosition = css`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: stretch;
  justify-content: flex-end;
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;

const Books = styled.div`
  ${baseBooks}
`;

const BookSelected = styled.div`
  ${baseBookSelected}
`;

const HeaderPosition = styled.div`
  ${baseHeaderPosition}
`;

export const Styled = {
  BookSelected,
  BeneathHome,
  Books,
  HeaderPosition,
};
