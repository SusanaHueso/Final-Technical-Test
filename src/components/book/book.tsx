import * as React from "react";
import { Styled } from "./book.styles";
import { Page } from "./page";
import { PageCover } from "./page-cover";

export const Book = ({ text, bigBook }: any) => {
  // sizes below correspond to NOT clicked book
  const textLength = text.length;
  React.useEffect(() => {
    console.log(textLength);
  }, [textLength]);

  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={250}
          height={300}
          size="stretch"
          minWidth={250}
          minHeight={300}
          maxShadowOpacity={0.5}
          showCover={true}
          autosize={true}
        >
          <PageCover>BOOK TITLE</PageCover>
          <Page number="1">{text}</Page>
          <Page number="2">Page text</Page>
          <Page number="3">Page text</Page>
          <Page number="4">Page text</Page>
          <PageCover>THE END</PageCover>
        </Styled.BigBook>
      ) : (
        <Styled.SmallBook />
      )}
    </div>
  );
};
