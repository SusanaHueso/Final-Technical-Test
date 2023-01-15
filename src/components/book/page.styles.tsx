import styled, { css } from "styled-components";

// *** Base ***
const basePageBackGround = css`
  background: linear-gradient(
    99deg,
    rgba(230, 208, 121, 1) 0%,
    rgba(255, 252, 197, 1) 51%,
    rgba(230, 208, 121, 1) 100%
  );
`;

const basePageNumber = css`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const baseText = css`
  text-align: justify;

  word-wrap: break-word;
  white-space: normal;
  color: red;

  margin-left: 33px;
  margin-right: 33px;
`;
const basePageSize = css`
  position: relative;
  top: 36px;
  width: 100%;
  display: flex;
  height: 91%;
  flex-direction: column;
  justify-content: space-between;
`;
// *** Components ***
const PageBackGround = styled.div`
  ${basePageBackGround}
`;

const PageNumber = styled.p`
  ${basePageNumber}
`;

const PageSize = styled.div`
  ${basePageSize}
`;

const Text = styled.p`
  ${baseText}
`;
export const Styled = {
  PageBackGround,
  PageNumber,
  PageSize,
  Text,
};
