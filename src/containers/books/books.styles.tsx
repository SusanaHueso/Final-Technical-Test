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
  height: 100vh;
  width: 100vw;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-evenly;
  position: relative;
  overflow-y: auto;
  position: relative;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;

const Books = styled.div`
  ${baseBooks}
`;

export const Styled = {
  BeneathHome,
  Books,
};
