import * as React from "react";
import { Styled } from "./page.styles";
export const Page = React.forwardRef((props: any, ref: any) => {
  return (
    <Styled.PageBackGround ref={ref}>
      <Styled.PageSize>
        <Styled.Text>{props.children}</Styled.Text>
        <Styled.PageNumber>Page number: {props.number}</Styled.PageNumber>
      </Styled.PageSize>
    </Styled.PageBackGround>
  );
});
