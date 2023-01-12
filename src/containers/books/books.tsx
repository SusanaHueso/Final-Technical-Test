/* eslint-disable @typescript-eslint/no-unused-expressions */
import ClickAwayListener from "@mui/base/ClickAwayListener";

import { MyBook } from "../../components/book/book";
import { Styled } from "./books.styles";
import { Header } from "../../components/header/header";
import React, { useState } from "react";

export const Books = () => {
  // map with books in the return, will have to manage api call and pass info to MyBook
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
    console.log("im outside, bigBook is " + bigBook);
  };
  const handleClick = () => {
    // put here all the setter of book info to pass to the BIGBOOK render
    setBigBook(true);
  };
  console.log("im inside, bigBook is " + bigBook);

  return (
    <Styled.BeneathHome>
      <Header />
      <Styled.Books id="parent">
        {!bigBook ? (
          <div>
            {arrayy.map((book: string) => (
              <React.Fragment key={book}>
                <div onClick={handleClick}>
                  <MyBook id={book} text={""} bigBook={bigBook} />
                </div>
              </React.Fragment>
            ))}{" "}
          </div>
        ) : (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Styled.BookSelected>
              <MyBook text={"uifdhgviuyfdhgiuy"} bigBook={bigBook} />
            </Styled.BookSelected>
          </ClickAwayListener>
        )}
      </Styled.Books>
    </Styled.BeneathHome>
  );
};
