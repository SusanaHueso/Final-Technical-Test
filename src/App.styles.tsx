import styled, { css } from "styled-components";
import image from "./images/image.jpg";

// *** Base ***
const baseApp = css`
  height: 100vh;
  width: 100vw;
  display: flex;  
  overflow: hidden;
}
`;
const baseBeneathHome = css`
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2)
    ),
    url(${image});
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover !important;

  display: flex;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;

  flex-direction: column;

  flex-wrap: wrap;

  align-content: flex-end;

  justify-content: space-between;

  align-items: stretch;
`;
// *** Components ***
const App = styled.div`
  ${baseApp};
`;

const BeneathHome = styled.div`
  ${baseBeneathHome}
`;

export const Styled = {
  App,
  BeneathHome,
};
