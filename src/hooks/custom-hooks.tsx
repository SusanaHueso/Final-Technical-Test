import { useContext, useEffect, useState } from "react";
import { UsersAndBooks } from "../App";

export const useFetchUserLogged = () => {
  const { users, books, setBooks, setUsers } = useContext(UsersAndBooks);
  const [userLogged, setUserLogged] = useState<any>();
  useEffect(() => {
    users.map((user: any) => {
      if (user.id === sessionStorage.getItem("user")) {
        setUserLogged(user);
      }
    });
  }, [users]);

  return { userLogged };
};
