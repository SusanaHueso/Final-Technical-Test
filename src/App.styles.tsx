import styled, { css } from "styled-components";

// *** Base ***
const baseApp = css`
  height: 100vh;
  width: 100vw;
  display: flex;
}
`;

// *** Components ***
const App = styled.div`
  ${baseApp};
`;

export const Styled = {
  App,
};
