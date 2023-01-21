import api from "../../services/api";
import { Styled } from "./custom-buttom.styles";
import { useFetchUserLogged } from "../../hooks/custom-hooks";
import { useContext, useEffect, useState } from "react";
import { UsersAndBooks } from "../../App";
import * as Icon from "react-bootstrap-icons";
export const CustomButton = ({ handleAdd, book }: any) => {
  const { userLogged } = useFetchUserLogged();
  const { users, setUsers } = useContext(UsersAndBooks);
  const [bookWait, setBookWait] = useState(() => book);

  const checkAlreadyOnFavourites = () => {
    if (
      typeof book !== "undefined" &&
      typeof userLogged.Favouritebookslist !== "undefined" &&
      typeof userLogged !== "undefined"
    ) {
      return userLogged.Favouritebookslist.filter(
        (thisbook: any) => thisbook?.id === book?.id
      ).length;
    }
    return undefined;
  };
  useEffect(() => {
    checkAlreadyOnFavourites();
  }, [book, userLogged, users]);

  const addBookToUserList = async () => {
    let newList: any[] = [];

    if (typeof checkAlreadyOnFavourites() !== "undefined") {
      if (checkAlreadyOnFavourites() > 0) {
        newList = userLogged?.Favouritebookslist?.filter(
          (thisbook: any) => thisbook.id !== book.id
        );
        userLogged.Favouritebookslist = newList;
      } else {
        if (checkAlreadyOnFavourites() === 0) {
          userLogged.Favouritebookslist.push(book);
        }
      }

      const response2 = await api.put(
        `/users/${sessionStorage.getItem("user")}`,
        {
          id: userLogged.id,
          Name: userLogged.Name,
          Surname: userLogged.Surname,
          Email: userLogged.Email,
          Password: userLogged.Password,
          Favouritebookslist: userLogged?.Favouritebookslist,
        }
      );

      setUsers([...users, response2.data]);
    }
  };
  //const showIcon = checkAlreadyOnFavourites() ? (    <Icon.BookmarkHeartFill />  ) : (    <Icon.Bookmark />  );
  return (
    <Styled.Button
      onClick={() => {
        typeof checkAlreadyOnFavourites() !== "undefined" &&
          typeof book !== "undefined" &&
          typeof userLogged !== "undefined" &&
          addBookToUserList();
      }}
    ></Styled.Button>
  );
};
