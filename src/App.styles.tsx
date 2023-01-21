import styled, { css } from "styled-components";
import image from "./images/image.jpg";

// *** Base ***
const baseApp = css`
  width: 100%;
`;
const baseBeneathHome = css`
  position: relative;
  height: 100%;
  max-width: 100%;
  background-size: cover !important;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;
  min-width: max-content;
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
  width: 95%;
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
  max-width: 100%;
  min-height: 80vh;
 // top: 0px;
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
