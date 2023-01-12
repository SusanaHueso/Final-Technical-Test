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
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  overflow: hidden;
`;

const baseBooks = css`
  margin-right: 200px;
  top: 33px;
  display: flex;
  height: 90vh;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  position: relative;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

const baseBookSelected = css`
  height: 100vh;
  width: 100vw;
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

export const Styled = {
  BookSelected,
  BeneathHome,
  Books,
};
