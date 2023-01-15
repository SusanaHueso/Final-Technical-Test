import * as React from "react";
import { Styled } from "./header.styles";
export const Header = () => {
  return (
    <React.Fragment>
      <Styled.HeaderPosition>
        <Styled.Link href="/Books">Books</Styled.Link>
        <Styled.Link href="/Login">Login</Styled.Link>
        <Styled.Link href="/Register">Register</Styled.Link>
      </Styled.HeaderPosition>
    </React.Fragment>
  );
};
