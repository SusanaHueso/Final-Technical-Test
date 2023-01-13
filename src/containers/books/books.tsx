import ClickAwayListener from "@mui/base/ClickAwayListener";

import React, { useState } from "react";
import { Book } from "../../components/book/book";
import { Styled } from "./books.styles";
import { Header } from "../../components/header/header";

export const Books = () => {
  // map with books in the return, will have to manage api call and pass info to Book
  //const isOutside = !e.target.closest("#apple");
  const arrayy = [
    "book1",
    "book2",
    "book3",
    "book4",
    "book5",
    "book6",
    "book7",
  ];
  const [bigBook, setBigBook] = useState(false);
  const handleClickAway = () => {
    setBigBook(false);
  };
  const handleClick = () => {
    // put here all the setter of book info to pass to the BIGBOOK render
    setBigBook(true);
  };

  return (
    <Styled.BeneathHome>
      <Styled.HeaderPosition>
        <Header />
      </Styled.HeaderPosition>

      {!bigBook ? (
        <Styled.Books>
          {arrayy.map((book: string) => (
            <div onClick={handleClick} key={book}>
              <Book text={""} bigBook={bigBook} />
            </div>
          ))}
        </Styled.Books>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Styled.BookSelected>
            <Book text={"uifdhgviuyfdhgiuy"} bigBook={bigBook} />
          </Styled.BookSelected>
        </ClickAwayListener>
      )}
    </Styled.BeneathHome>
  );
};
