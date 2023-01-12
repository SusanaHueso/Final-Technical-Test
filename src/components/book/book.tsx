// @ts-nocheck
import * as React from "react";
import HTMLFlipBook from "react-pageflip";
import { Styled } from "./book.styles";

export const MyBook = (key) => {
  // sizes below correspond to clicked book
  /*  width={550}
      height={733}
      size="stretch"
      maxWidth={550}
      maxHeight={733}
      maxShadowOpacity={0.5}
      showCover={true}
      autosize={false}*/
  // sizes below correspond to NOT clicked book
  console.log("im book number   " + key.book);
  return (
    <Styled.Book
      width={250}
      height={333}
      size="stretch"
      maxWidth={250}
      maxHeight={333}
      maxShadowOpacity={0.5}
      showCover={true}
      autosize={false}
    >
      <Styled.PageBackGround>Page 1</Styled.PageBackGround>
      <Styled.PageBackGround>Page 2</Styled.PageBackGround>
      <Styled.PageBackGround>Page 3</Styled.PageBackGround>
      <Styled.PageBackGround>Page 4</Styled.PageBackGround>
    </Styled.Book>
  );
};
