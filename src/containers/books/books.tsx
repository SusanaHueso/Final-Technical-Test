import ClickAwayListener from "@mui/base/ClickAwayListener";
import { MyPagination } from "../../components/pagination/pagination";
import React, { useContext, useEffect, useState } from "react";
import { Book } from "../../components/book/book";
import { Styled } from "./books.styles";
import { Button } from "react-bootstrap";
import { UsersAndBooks } from "../../App";
import uuid from "react-uuid";
import api from "../../services/api";

export const Books = () => {
  //1340 characters per page
  const { users, books } = useContext(UsersAndBooks);
  const [bigBook, setBigBook] = useState(false);
  const [actualArray, setActualArray] = useState<string[]>([]);
  const [booksPagination, setBooksPagination] = useState({
    firstSlice: 1,
    lastSlice: 8,
  });
  const handleClickAway = () => {
    setBigBook(false);
  };
  const handleClick = () => {
    setBigBook(true);
  };

  // show items corresponding to the actual page
  useEffect(
    () =>
      setActualArray(
        books.slice(booksPagination.firstSlice, booksPagination.lastSlice)
      ),
    [books, booksPagination]
  );

  // this would have to update user
  const addBookToReadList = async (book: any) => {
    console.log("i'm the book " + book);
    const response = await api.post("/books", {
      id: uuid(),
      name: book,
    });
    //setBooks([...books, { name: book }]);
  };
  return (
    <React.Fragment>
      {!bigBook ? (
        <React.Fragment>
          <Styled.Books>
            {actualArray.map((book: any) => (
              <Styled.Book>
                <div onClick={handleClick} key={book.id}>
                  <Book book={book.name} text={""} bigBook={bigBook} />
                </div>
                <Button
                  onClick={() => {
                    addBookToReadList(book.name);
                  }}
                >
                  {" "}
                  Add To Read
                </Button>
              </Styled.Book>
            ))}
            <MyPagination
              setBooksPagination={(p: any) => setBooksPagination(p)}
            />
          </Styled.Books>{" "}
        </React.Fragment>
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
    </React.Fragment>
  );
};
