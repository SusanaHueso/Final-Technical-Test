import styled, { css } from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
// *** Base ***

const baseDropdown = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  padding: 13px;
`;

// *** Components ***

const MyDropDown = styled(Dropdown)`
  ${baseDropdown}
`;

export const Styled = { MyDropDown };
