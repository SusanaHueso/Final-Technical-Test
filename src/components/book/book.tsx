import * as React from "react";
import HTMLFlipBook from "react-pageflip";
import { Styled } from "./book.styles";

export const MyBook = ({ bigBook }: any) => {
  // sizes below correspond to clicked book
  /*  width={550}
      height={733}
      size="stretch"
      maxWidth={550}
      maxHeight={733}
      maxShadowOpacity={0.5}
      showCover={true}
      autosize={false}*/
  const Page = React.forwardRef((props: any, ref: any) => {
    return (
      <Styled.PageBackGround ref={ref}>
        <h1>TITLE</h1>
        <p>{}</p>
        <p>Page number: {}</p>
      </Styled.PageBackGround>
    );
  });

  // sizes below correspond to NOT clicked book
  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={3550}
          height={3733}
          size="stretch"
          maxWidth={3550}
          maxHeight={3733}
          maxShadowOpacity={0.5}
          showCover={true}
          autosize={false}
        >
          <Page number="1">Page text</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
        </Styled.BigBook>
      ) : (
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
          <Page number="1">Page text</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
        </Styled.Book>
      )}
    </div>
  );
};
