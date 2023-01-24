import styled, { css } from "styled-components";
import { Button } from "react-bootstrap";
// *** Base ***
const baseButton = css`
  background: linear-gradient(90deg, #fcff9e 0%, #c67700 100%);
  z-index: 2;
`;

// *** Components ***

const StyledButton = styled(Button)`
  ${baseButton}
`;

export const Styled = { Button: StyledButton };
