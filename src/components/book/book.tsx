import * as React from "react";
import { useEffect } from "react";
import { Styled } from "./book.styles";
import { Page } from "./page";
import { PageCover } from "./page-cover";

export type OnlyBookType = {
  id: string;
  Title: string;
  Author: string;
  Genre: string;
  Year: string;
  Synopsis: string;
  Cover: string;
};

export type BookType = {
  book: OnlyBookType;
  bigBook: boolean;
};
export const Book: React.FC<BookType> = ({ book, bigBook }: any) => {
  const [SynopsisFragment, setSynopsisFragment] = React.useState<any[]>([]);

  useEffect(() => {
    if (book !== undefined) {
      const fragments = book.Synopsis.match(/(.|[\r\n\p{Zs}]){1,810}/g);
      setSynopsisFragment(fragments);
    }
  }, [book]);
  const [coverBackGroundStyle, setCoverBackGroundStyle] = React.useState({
    $backgroundImage: "",
  });
  useEffect(() => {
    let base64_to_imgsrc = book.Cover;
    setCoverBackGroundStyle({
      $backgroundImage: base64_to_imgsrc,
    });
  }, [book.Cover]);

  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={700}
          height={600}
          minWidth={700}
          minHeight={600}
          maxWidth={700}
          maxHeight={600}
          size="stretch"
          maxShadowOpacity={0.5}
          showCover={true}
          autoSize={true}
        >
          <PageCover>{book}</PageCover>
          {SynopsisFragment.map((fragment) => (
            <Page
              key={fragment}
              number={SynopsisFragment.indexOf(fragment) + 1}
            >
              {fragment}
            </Page>
          ))}
          <Page number="..."></Page>
          <PageCover>THE END</PageCover>
        </Styled.BigBook>
      ) : (
        <Styled.SmallBook {...coverBackGroundStyle}></Styled.SmallBook>
      )}
    </div>
  );
};
