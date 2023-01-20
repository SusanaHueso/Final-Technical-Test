import * as React from "react";
import { useEffect } from "react";
import { Books } from "../../containers/books/books";
import { Styled } from "./book.styles";
import { Page } from "./page";
import { PageCover } from "./page-cover";

export const Book = ({ book, bigBook }: any) => {
  //1340 characters per page

  const [SynopsisFragment, setSynopsisFragment] = React.useState<any[]>([]);

  useEffect(() => {
    if (book !== undefined) {
      const fragments = book.Synopsis.match(/(.|[\r\n\p{Zs}]){1,465}/g);
      setSynopsisFragment(fragments);
    }
  }, [book]);
  const [coverBackGroundStyle, setCoverBackGroundStyle] = React.useState({
    $backgroundImage: "",
  });
  useEffect(() => {
    setCoverBackGroundStyle({
      $backgroundImage: book.Cover,
    });
  }, [book.Cover]);

  return (
    <div>
      {bigBook ? (
        <Styled.BigBook
          width={670}
          height={750}
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
