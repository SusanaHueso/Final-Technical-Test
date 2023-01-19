import styled, { css } from "styled-components";
import { Form, Button } from "react-bootstrap";
// *** Base ***
const baseMyForm = css`
  position: relative;
  border-radius: 13px;
  width: 100%;
  height: 100%;
  padding: 15px;
  pointer-events: auto;
`;
const baseLabel = css`
  margin-bottom: 6px;
`;

const baseOneFormFields = css`
  margin: 13px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: stretch;
  margin-bottom: 12px;
  
`;

const baseButtonPosition = css`
  padding: 13px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-end;
`;
const baseAdmin = css``;
// *** Components ***
const MyForm = styled(Form)`
  ${baseMyForm};
`;

const Label = styled(Form.Label)`
  ${baseLabel};
`;

const OneFormFields = styled(Form.Group)`
  ${baseOneFormFields};
`;

const ButtonPosition = styled.div`
  ${baseButtonPosition};
`;

const Admin = styled.div`
  ${baseAdmin};
`;

export const Styled = { MyForm, Label, OneFormFields, ButtonPosition, Admin };
