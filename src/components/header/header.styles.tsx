import styled, { css } from "styled-components";

// *** Base ***
const baseStyledLink = css`
  font-size: 3vh;
  font-size: 3vw;
  color: white;
  border-radius: 13px;
  background-color: transparent;
  border-color: transparent;
  margin-right: 5vw;
  text-decoration: none;
`;

const baseHeaderPosition = css`
  position: absolute;
  top: 6px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: space-around;
  align-items: stretch;
  justify-content: flex-end;
`;

// *** Components ***
const StyledLink = styled.a`
  ${baseStyledLink};
`;

const HeaderPosition = styled.div`
  ${baseHeaderPosition}
`;

export const Styled = { Link: StyledLink, HeaderPosition };
