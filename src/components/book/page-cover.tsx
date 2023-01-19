import * as React from "react";
import { useMemo, useState } from "react";
import { Styled } from "./page-cover.styles";
export const PageCover = React.forwardRef((props: any, ref: any) => {
  const [coverBackGroundStyle, setCoverBackGroundStyle] = useState({
    $backgroundImage: "",
  });

  useMemo(() => {
    setCoverBackGroundStyle({
      $backgroundImage: props.children.Cover,
    });
  }, [props.children.Cover]);
  console.log(coverBackGroundStyle);
  return (
    <Styled.CoverBackGround
      {...coverBackGroundStyle}
      ref={ref}
      data-density="hard"
    >
      <Styled.CoverLetters></Styled.CoverLetters>
    </Styled.CoverBackGround>
  );
});
