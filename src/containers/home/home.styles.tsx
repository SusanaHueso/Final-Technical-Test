import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const baseBeneathHome = css`
  height: 100%;
  width: 100%;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1)
    ),
    url(${image}); ;
`;
const baseHome = css`
  height: 90%;
  width: 90%;
  background-image: url(${image});
  background-size: cover;
  &:hover {
    background-image: linear-gradient(
        to bottom,
        rgba(255, 25, 0, 0.2),
        rgba(0, 0, 255, 0.4)
      ),
      url(${image});
  }
  border-radius: 13px;
`;

// *** Components ***
const BeneathHome = styled.div`
  ${baseBeneathHome}
`;
const Home = styled.div`
  ${baseHome};
`;

export const Styled = {
  BeneathHome,
  Home,
};
