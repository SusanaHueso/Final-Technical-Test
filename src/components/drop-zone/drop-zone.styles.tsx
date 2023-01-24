import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
// *** Base ***
const baseDropZone = css`
  background-color: white;
  border-color: #80808066;
  border-style: dotted;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
const baseStyledImage = css`
  height: 40vh;
`;
// *** Components ***

const DropZone = styled.div`
  ${baseDropZone}
`;
const StyledImage = styled.img`
  ${baseStyledImage}
`;

export const Styled = { DropZone, Image: StyledImage };
