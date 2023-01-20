import ClickAwayListener from "@mui/base/ClickAwayListener";
import { MyPagination } from "../../components/pagination/pagination";
import React, { useContext, useEffect, useState } from "react";
import { Book } from "../../components/book/book";
import { Styled } from "./books.styles";
import { Button } from "react-bootstrap";
import { UsersAndBooks } from "../../App";
import uuid from "react-uuid";
import api from "../../services/api";

export const Books = ({ showAll }: any) => {
  const { users, books } = useContext(UsersAndBooks);
  const [bigBook, setBigBook] = useState(false);
  const [book, setBook] = useState();
  const [actualArray, setActualArray] = useState<string[]>([]);
  const [booksPagination, setBooksPagination] = useState({
    firstSlice: 1,
    lastSlice: 8,
  });
  const handleClickAway = () => {
    setBigBook(false);
  };
  const handleClick = (book: any) => {
    setBigBook(true);
    setBook(book);
  };

  // show items corresponding to the actual page
  useEffect(() => {
    if (showAll === true) {
      setActualArray(
        books.slice(booksPagination.firstSlice, booksPagination.lastSlice)
      );
    } else {
      setActualArray(books.slice(books.length - 4, books.length));
    }
  }, [books, booksPagination, showAll]);

  return (
    <React.Fragment>
      {!bigBook ? (
        <React.Fragment>
          <Styled.Books>
            {actualArray.map((book: any) => (
              <Styled.Book key={book.id}>
                <div onClick={() => handleClick(book)} key={book.id}>
                  <Book {...book} text={""} bigBook={bigBook} />
                </div>
                {showAll && (
                  <Button
                    onClick={() => {
                      ("");
                    }}
                  >
                    {" "}
                    Add To Read
                  </Button>
                )}
              </Styled.Book>
            ))}
            {showAll && (
              <MyPagination
                setBooksPagination={(p: any) => setBooksPagination(p)}
              />
            )}
          </Styled.Books>{" "}
        </React.Fragment>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Styled.BookSelected>
            <Book book={book} bigBook={bigBook} />
          </Styled.BookSelected>
        </ClickAwayListener>
      )}
    </React.Fragment>
  );
};
