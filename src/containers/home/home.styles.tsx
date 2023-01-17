import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Types ***
export type AnimationType = {
  transition: string | undefined;
  transform: string | undefined;
};

// *** Base ***

const baseCentralImage = css`
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  flex-direction: row;
  background-image: url(${image});
  background-size: cover;
  border-radius: 13px;
  position: relative;
  display: flex;
  height: 650px;
  width: 1500px;
`;

// *** Components ***

const CentralImage = styled.div`
  ${baseCentralImage};
`;

export const Styled = {
  CentralImage,
};
