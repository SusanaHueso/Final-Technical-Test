import styled, { css } from "styled-components";
import { Form, Button } from "react-bootstrap";
// *** Base ***
const baseMyForm = css`
  position: absolute;

  border-radius: 13px;
  width: 500px;
  padding: 15px;
  left: 300px;
  top: 100px;
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

export const Styled = { MyForm, Label, OneFormFields, ButtonPosition };
