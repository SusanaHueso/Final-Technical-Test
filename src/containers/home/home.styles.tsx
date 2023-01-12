import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Types ***
export type AnimationType = {
  transition: string | undefined;
  transform: string | undefined;
};

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

const baseCentralImage = css`
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  height: 90vh;
  width: 90vw;
  background-image: url(${image});
  background-size: cover;
  border-radius: 13px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: center;
  margin-right: 5vw;
  margin-left: 5vw;
  margin-bottom: 2%;
`;

const baseCentralImagePosition = css`
  height: 95vh;
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
