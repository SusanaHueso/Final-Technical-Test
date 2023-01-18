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
  position: fixed;
  height: 100%;
  width: 100%;
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

  align-content: center;

  justify-content: center;
  flex-direction: column;

  flex-wrap: nowrap;

  align-content: flex-start;

  justify-content: flex-start;

  align-items: center;
`;
const baseLineBorder = css`
  background: linear-gradient(
    0deg,
    rgba(255, 249, 234, 1) 0%,
    rgba(255, 254, 253, 1) 0%,
    rgba(254, 242, 211, 1) 100%
  );
  position: relative;
  border-color: black;
  border-style: solid;
  height: fit-content;
  margin-bottom: 13px;
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: stretch;
  padding-bottom: 55px;
  padding-top: 55px;
  padding-right: 43px;
  padding-left: 43px;
`;
// *** Components ***
const App = styled.div`
  ${baseApp};
`;

const BeneathHome = styled.div`
  ${baseBeneathHome}
`;
const LineBorder = styled.div`
  ${baseLineBorder}
`;

export const Styled = {
  App,
  BeneathHome,

  LineBorder,
};
