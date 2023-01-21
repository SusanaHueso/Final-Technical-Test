import ClickAwayListener from "@mui/base/ClickAwayListener";
import { MyPagination } from "../../components/pagination/pagination";
import React, { useContext, useEffect, useState } from "react";
import { Book } from "../../components/book/book";
import { Styled } from "./books.styles";
import { UsersAndBooks } from "../../App";
import { useFetchUserLogged } from "../../hooks/custom-hooks";
import { CustomButton } from "../../components/custom-button/custom-buttom";

import { SearchBar } from "../../components/searchbar/searchbar";
export const Books = ({ showAll }: any) => {
  const { books } = useContext(UsersAndBooks);
  const [bigBook, setBigBook] = useState(false);
  const [book, setBook] = useState();
  const [actualArray, setActualArray] = useState<string[]>([]);
  const [search, setSearch] = useState<any>();
  const [booksPagination, setBooksPagination] = useState({
    firstSlice: "",
    lastSlice: "",
  });
  const [clickedBook, setClickedBook] = useState();
  const { userLogged } = useFetchUserLogged();
  const handleClickAway = () => {
    setBigBook(false);
  };
  const handleClick = (book: any) => {
    setBigBook(true);
    setBook(book);
  };
  const handleAdd = (book: any) => {
    setClickedBook(book);
  };
  // show items corresponding to the actual page
  useEffect(() => {
    if (showAll === true) {
      setActualArray(
        books.slice(booksPagination.firstSlice, booksPagination.lastSlice)
      );
    } else {
      setActualArray(books.slice(books.length - 3, books.length));
    }
  }, [books, booksPagination.firstSlice, booksPagination.lastSlice, showAll]);
  //console.log("you clicked me" + clickedBook);
  return (
    <React.Fragment>
      {!bigBook ? (
        <React.Fragment>
          {showAll && <SearchBar setSearch={(p: any) => setSearch(p)} />}
          <Styled.Books>
            {!search &&
              actualArray.map((book: any) => (
                <Styled.Book key={book.id}>
                  <div onClick={() => handleClick(book)} key={book.id}>
                    <Book book={book} text={""} bigBook={bigBook} />{" "}
                  </div>
                  {userLogged && (
                    <div
                      onClick={() => {
                        handleAdd(book);
                      }}
                    >
                      <CustomButton book={clickedBook} />
                    </div>
                  )}
                </Styled.Book>
              ))}
            {typeof search !== "undefined" &&
              search.length > 0 &&
              actualArray.map(
                (book: any) =>
                  book.Title.toLowerCase().includes(search) && (
                    <Styled.Book key={book.id}>
                      <div onClick={() => handleClick(book)} key={book.id}>
                        <Book book={book} text={""} bigBook={bigBook} />{" "}
                      </div>
                      {userLogged && (
                        <div
                          onClick={() => {
                            handleAdd(book);
                          }}
                        >
                          <CustomButton book={clickedBook} />
                        </div>
                      )}
                    </Styled.Book>
                  )
              )}
          </Styled.Books>{" "}
          {showAll && (
            <MyPagination
              search={search}
              setBooksPagination={(p: any) => setBooksPagination(p)}
            />
          )}
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
