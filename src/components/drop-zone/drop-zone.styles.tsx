import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
// *** Base ***
const baseDropZone = css`
  background-color: white;
  border-color: #80808066;
  border-style: dotted;
`;

// *** Components ***

const DropZone = styled.div`
  ${baseDropZone}
`;

export const Styled = { DropZone };
