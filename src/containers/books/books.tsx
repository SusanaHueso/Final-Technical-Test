import * as React from "react";

import { MyBook } from "../../components/book/book";
import { Styled } from "./books.styles";
import { Header } from "../../components/header/header";
export const Books = () => {
  // map with books in the return, will have to manage api call and pass info to MyBook

  const arrayy = [
    "book1",
    "book2",
    "book3",
    "book1",
    "book2",
    "book3",
    "book1",
    "book2",
    "book3",
    "book3",
    "book1",
    "book2",
    "book3",
    "book1",
    "book2",
    "book3",
    "book1",
    "book2",
    "book3",
    "book3",
    "book1",
    "book2",
    "book3",
    "book1",
    "book2",
    "book3",
  ];
  return (
    <Styled.BeneathHome>
      <Header />

      <Styled.Books>
        {arrayy.map((book) => (
          <React.Fragment key={book}>
            <div>
              <MyBook />
            </div>
          </React.Fragment>
        ))}
      </Styled.Books>
    </Styled.BeneathHome>
  );
};
