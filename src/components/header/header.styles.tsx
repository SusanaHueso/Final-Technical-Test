import styled, { css } from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
// *** Base ***
const baseHeader = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 23px;
`;

const baseDropdown = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  padding: 13px;
`;

const baseDropDownToggle = css`
  color: black;
  background-color: white;
  border: transparent;
`;
// *** Components ***

const MyDropDown = styled(Dropdown)`
  ${baseDropdown}
`;

const Header = styled.div`
  ${baseHeader}
`;

const DropDownToggle = styled(Dropdown.Toggle)`
  ${baseDropDownToggle}
`;

export const Styled = { MyDropDown, Header, DropDownToggle };
