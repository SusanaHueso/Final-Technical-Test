/* eslint-disable valid-typeof */
import { api } from "../../services/api";
import { Styled } from "./custom-buttom.styles";
import { useFetchUserLogged } from "../../hooks/custom-hooks";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { UsersAndBooks } from "../../App";
import * as Icon from "react-bootstrap-icons";

export const CustomButton = ({ myIcon, mybook }: any) => {
  const { userLogged } = useFetchUserLogged();
  const { users, setUsers } = useContext(UsersAndBooks);
  const [shouldDelete, setShoulddete] = useState(true);

  const checkAlreadyOnFavourites = () => {
    return userLogged?.Favouritebookslist?.filter(
      (thisbook: any) => thisbook?.id === mybook?.id
    )?.length;
  };

  const handleDelete = () => {
    if (
      typeof userLogged?.Favouritebookslist !== "undefined" &&
      typeof userLogged !== "undefined" &&
      typeof mybook !== "undefined"
    ) {
      let newList = [];

      newList = userLogged?.Favouritebookslist?.filter(
        (thisbook: any) => thisbook.id !== mybook?.id
      );

      modifyListofFavourites(newList);
    }
    return [];
  };
  const handleAdd = () => {
    if (
      typeof userLogged?.Favouritebookslist !== "undefined" &&
      typeof userLogged !== "undefined" &&
      typeof mybook !== "undefined"
    ) {
      let newList = [];

      userLogged?.Favouritebookslist?.push(mybook);
      newList = userLogged?.Favouritebookslist;

      modifyListofFavourites(newList);
    }
    return [];
  };

  const modifyListofFavourites = async (newList: any) => {
    const response2 = await api.put(
      `/users/${sessionStorage.getItem("user")}`,
      {
        id: userLogged?.id,
        Name: userLogged?.Name,
        Surname: userLogged?.Surname,
        Email: userLogged?.Email,
        Password: userLogged?.Password,
        Favouritebookslist: newList,
      }
    );
    setUsers([...users, response2.data]);
  };

  const handleUpdate = () => {
    setShoulddete(!shouldDelete);
  };

  useEffect(() => {
    if (checkAlreadyOnFavourites() === 0 && mybook) {
      handleAdd();
    } else {
      if (checkAlreadyOnFavourites() > 0 && mybook) {
        handleDelete();
      }
    }
  }, [shouldDelete]);
  console.log(myIcon);
  const showIcon =
    myIcon === "heart" ? <Icon.BookmarkHeartFill /> : <Icon.Bookmark />;

  return (
    <Styled.Button
      onClick={() => {
        handleUpdate();
      }}
    >
      {showIcon}
    </Styled.Button>
  );
};
