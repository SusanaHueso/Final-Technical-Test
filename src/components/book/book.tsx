import * as React from "react";
import { Styled } from "./book.styles";

export const Book = ({ text, bigBook }: any) => {
  const PageCover = React.forwardRef((props: any, ref: any) => {
    return (
      <Styled.CoverBackGround ref={ref} data-density="hard">
        <div className="page-content">
          <h2>{props.children}</h2>
        </div>
      </Styled.CoverBackGround>
    );
  });
  const Page = React.forwardRef((props: any, ref: any) => {
    return (
      <Styled.PageBackGround ref={ref}>
        <h1>TITLE</h1>
        <p>{props.children}</p>
        <p>Page number: {props.number}</p>
      </Styled.PageBackGround>
    );
  });

  // sizes below correspond to NOT clicked book
  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={100}
          height={100}
          size="stretch"
          minWidth={100}
          minHeight={100}
          maxShadowOpacity={0.5}
          showCover={false}
          autosize={true}
        >
          <Page number="1">{text}</Page>
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
          autosize={true}
        >
          <PageCover>BOOK TITLE</PageCover>
          <Page number="1">Page text</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
          <PageCover>THE END</PageCover>
        </Styled.Book>
      )}
    </div>
  );
};
