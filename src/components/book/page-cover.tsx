import * as React from "react";
import { Styled } from "./page-cover.styles";
export const PageCover = React.forwardRef((props: any, ref: any) => {
  return (
    <Styled.CoverBackGround ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </Styled.CoverBackGround>
  );
});
