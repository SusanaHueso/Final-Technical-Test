/* eslint-disable valid-typeof */
import { api } from "../../services/api";
import { Styled } from "./custom-buttom.styles";

import { useContext, useEffect, useState } from "react";
import { UsersAndBooks } from "../../App";
import * as Icon from "react-bootstrap-icons";

export const CustomButton = ({ myIcon, mybook }: any) => {
  const userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  const { users, setUsers } = useContext(UsersAndBooks);
  const [shouldDelete, setShoulddete] = useState(true);

  const checkAlreadyOnFavourites = () => {
    return userLogged?.Favouritebookslist?.filter(
      (thisbook: any) => thisbook?.id === mybook?.id
    )?.length;
  };

  const handleDelete = () => {
    if (
      userLogged &&
      Object.keys(userLogged).length !== 0 &&
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
      userLogged &&
      Object.keys(userLogged).length !== 0 &&
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
    const updatedUser = {
      id: userLogged?.id,
      Name: userLogged?.Name,
      Surname: userLogged?.Surname,
      Email: userLogged?.Email,
      Password: userLogged?.Password,
      Favouritebookslist: newList,
      isAdmin: userLogged?.isAdmin,
    };
    const response2 = await api.put(`/users/${userLogged?.id}`, updatedUser);
    sessionStorage.setItem("user", JSON.stringify(updatedUser));
    setUsers([...users, response2.data]);
  };

  const handleUpdate = () => {
    if (checkAlreadyOnFavourites() === 0 && mybook) {
      handleAdd();
    } else {
      if (checkAlreadyOnFavourites() > 0 && mybook) {
        handleDelete();
      }
    }
  };

  const showIcon =
    myIcon === "heart" ? <Icon.BookmarkHeartFill /> : <Icon.Bookmark />;
  console.log(shouldDelete);
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
