import { Button } from "react-bootstrap";
import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Types ***
export type AnimationType = {
  transition: string;
  transform: string;
};

// *** Base ***
const baseBeneathHome = css`
  height: 100vh;
  width: 100vw;
  background-size: fit;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.09),
      rgba(255, 255, 255, 0.09)
    ),
    url(${image});
  overflow: hidden;
`;

const baseHome = css`
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
  transition: 1s all;
`;

const baseStyledButton = css`
  font-size: 23px;
  color: white;
  border-radius: 13px;
  background-color: #006275;
  opacity: 70%;
  border-color: grey;
  &:hover {
    transition: transform 2s;
    transform: rotate3d(5, -1, -1, -1turn);
  }
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;
const Home = styled.div<AnimationType>`
  ${baseHome};
  &:hover {
    transition: ${(props: any) => props.transition} !important;
    transform: ${(props: any) => props.transform} !important;
  }
`;

const StyledButton = styled(Button)`
  ${baseStyledButton};
`;

export const Styled = {
  BeneathHome,
  Home,
  Button: StyledButton,
};
