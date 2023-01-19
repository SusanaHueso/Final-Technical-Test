import styled, { css } from "styled-components";

// *** Base ***
const basePageBackGround = css`
  background: linear-gradient(
    99deg,
    rgba(230, 208, 121, 1) 0%,
    rgba(255, 252, 197, 1) 51%,
    rgba(230, 208, 121, 1) 100%
  );
  height: fit-content;
`;

const basePageNumber = css`
  bottom: 0;
  position: fixed;
  left: 40%;
`;
const baseText = css`
  text-align: justify;
  color: brown;
  margin-left: 63px;
  margin-right: 63px;
  font-style: italic;
  font-size: 23px;
  position: relative;
  top: 48px;
`;

// *** Components ***
const PageBackGround = styled.div`
  ${basePageBackGround}
`;

const PageNumber = styled.p`
  ${basePageNumber}
`;

const Text = styled.p`
  ${baseText}
`;
export const Styled = {
  PageBackGround,
  PageNumber,

  Text,
};
