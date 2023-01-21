import styled, { css } from "styled-components";
import Dropdown from "react-bootstrap/Dropdown";
// *** Base ***
const baseHeader = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 23px;
  justify-content: center;
  position: relative;
  margin-bottom: 43px;
`;

const baseDropdown = css`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
  padding: 13px;
  margin-left: 23px;
  margin-right: 23px;
`;

const baseDropDownToggle = css`
  color: black !important;
  background-color: white !important;
  border: transparent;
`;
const baseLink = css`
  color: black !important;
  padding: 13px;
  margin-left: 23px;
  margin-right: 23px;
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
const Link = styled.a`
  ${baseLink}
`;
export const Styled = { MyDropDown, Header, DropDownToggle, Link };
