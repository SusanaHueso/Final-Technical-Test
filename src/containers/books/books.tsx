import ClickAwayListener from "@mui/base/ClickAwayListener";
import { MyPagination } from "../../components/pagination/pagination";
import React, { useContext, useEffect, useState } from "react";
import { Book } from "../../components/book/book";
import { Styled } from "./books.styles";
import { UsersAndBooks } from "../../App";
import { CustomAddToFavouritesButton } from "../../components/custom-add-to-favourites-button/custom-add-to-favourites-button";

import { SearchBar } from "../../components/searchbar/searchbar";
import type { OnlyBookType } from "../../components/book/book";

export type BooksType = {
  showAll: boolean;
};

export const Books: React.FC<BooksType> = ({ showAll }) => {
  const { books } = useContext(UsersAndBooks);
  const [bigBook, setBigBook] = useState<boolean>(false);
  const [book, setBook] = useState<OnlyBookType>();
  const [actualArray, setActualArray] = useState<OnlyBookType[]>([]);
  const [search, setSearch] = useState<string | undefined>();
  const [booksPagination, setBooksPagination] = useState<{
    firstSlice: number;
    lastSlice: number;
  }>({
    firstSlice: 0,
    lastSlice: 0,
  });

  const userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");

  const handleClickAway = () => {
    setBigBook(false);
  };
  const handleClick = (book: OnlyBookType) => {
    setBigBook(true);
    setBook(book);
  };
  const checkAlreadyOnFavourites = (book: OnlyBookType) => {
    return userLogged?.Favouritebookslist?.filter(
      (thisbook: OnlyBookType) => thisbook?.id === book?.id
    )?.length;
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

  return (
    <React.Fragment>
      {showAll && <SearchBar setSearch={setSearch} />}
      {!bigBook ? (
        <React.Fragment>
          <Styled.Books>
            {actualArray.map(
              (book: OnlyBookType) =>
                ((typeof search !== "undefined" &&
                  search.length > 0 &&
                  book.Title.toLowerCase().includes(search)) ||
                  !search) && (
                  <Styled.Book key={book.id}>
                    <div onClick={() => handleClick(book)} key={book.id}>
                      <Book book={book} bigBook={bigBook} />{" "}
                    </div>
                    {userLogged && // null and undefined check
                      Object.keys(userLogged).length !== 0 && (
                        <CustomAddToFavouritesButton
                          myIcon={
                            checkAlreadyOnFavourites(book) > 0
                              ? "heart"
                              : "noheart"
                          }
                          mybook={book}
                        />
                      )}
                  </Styled.Book>
                )
            )}
          </Styled.Books>{" "}
          {showAll && (
            <MyPagination
              search={search}
              setBooksPagination={setBooksPagination}
            />
          )}
        </React.Fragment>
      ) : (
        <ClickAwayListener onClickAway={handleClickAway}>
          <Styled.BookSelected>
            {book && <Book book={book} bigBook={bigBook} />}
          </Styled.BookSelected>
        </ClickAwayListener>
      )}
    </React.Fragment>
  );
};
