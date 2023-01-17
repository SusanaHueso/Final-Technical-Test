import * as React from "react";

import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***
const basePagination = css`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: 1.5em;

  text-align: center;
  padding-top: 16px;
`;

// *** Components ***
const Pagination = styled.div`
  ${basePagination};
`;

export const Styled = {
  Pagination,
};
