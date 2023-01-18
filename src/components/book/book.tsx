import * as React from "react";
import { Styled } from "./book.styles";
import { Page } from "./page";
import { PageCover } from "./page-cover";

export const Book = ({ book, text, bigBook }: any) => {
  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={250}
          height={320}
          size="stretch"
          minWidth={100}
          maxShadowOpacity={0.5}
          showCover={true}
          autoSize={true}
        >
          <PageCover>BOOK TITLE</PageCover>
          <Page number="1">{text}</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
          <PageCover>THE END</PageCover>
        </Styled.BigBook>
      ) : (
        <Styled.SmallBook>{book}</Styled.SmallBook>
      )}
    </div>
  );
};
