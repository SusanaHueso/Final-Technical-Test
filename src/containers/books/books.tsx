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
//1340 characters per page
  return (
    <Styled.BeneathHome>
      <Header />

      {!bigBook ? (
        <Styled.Books>
          {arrayy.map((book: string) => (
            <Styled.Book onClick={handleClick} key={book}>
              <Book text={""} bigBook={bigBook} />
            </Styled.Book>
          ))}
        </Styled.Books>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Styled.BookSelected>
            <Book
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 4"
              }
              bigBook={bigBook}
            />
          </Styled.BookSelected>
        </ClickAwayListener>
      )}
    </Styled.BeneathHome>
  );
};
