import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Types ***
export type AnimationType = {
  transition: string | undefined;
  transform: string | undefined;
};

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

  align-content: space-between ;
  flex-direction: row;
`;

const baseCentralImage = css`
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  flex-direction: row;
  background-image: url(${image});
  background-size: cover;
  border-radius: 13px;
  top: 43px;
  position: relative;
  display: flex;
  height: 70vh;
  width: 90vw;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-width: thin;
`;

const baseCentralImagePosition = css`
  position: relative;
  display: flex;
  height: 90vh;
  width: 100vw;

  flex-wrap: wrap;

  align-content: flex-start;
  flex-direction: row;
  justify-content: space-around;
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;
const CentralImage = styled.div`
  ${baseCentralImage};
`;
const CentralImagePosition = styled.div`
  ${baseCentralImagePosition};
`;

export const Styled = {
  BeneathHome,
  CentralImage,
  CentralImagePosition,
};
