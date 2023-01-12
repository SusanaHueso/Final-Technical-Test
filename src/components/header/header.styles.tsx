import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const baseStyledLink = css`
  font-size: 2.5vh;
  font-size: 2.5vw;
  color: white;
  border-radius: 13px;
  background-color: transparent;
  border-color: transparent;
  margin-right: 5vw;
  text-decoration: none;
`;

// *** Components ***
const StyledLink = styled.a`
  ${baseStyledLink};
`;

export const Styled = { Link: StyledLink };
