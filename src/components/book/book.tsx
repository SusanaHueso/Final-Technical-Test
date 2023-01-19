import * as React from "react";
import { Books } from "../../containers/books/books";
import { Styled } from "./book.styles";
import { Page } from "./page";
import { PageCover } from "./page-cover";

export const Book = ({ book, bigBook }: any) => {
  //1340 characters per page
  console.log(book);
  const [SynopsisFragment, setSynopsisFragment] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (book !== undefined) {
      const fragments = book.Synopsis.match(/(.|[\r\n\p{Zs}]){1,465}/g);
      setSynopsisFragment(fragments);
    }
  }, [book]);
  console.log(SynopsisFragment);
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
            <Page key={fragment} number="1">
              {fragment}
            </Page>
          ))}
          <Page number="..."></Page>
          <PageCover>THE END</PageCover>
        </Styled.BigBook>
      ) : (
        <Styled.SmallBook>{book}</Styled.SmallBook>
      )}
    </div>
  );
};
