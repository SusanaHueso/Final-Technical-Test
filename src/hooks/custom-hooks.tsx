import { useState, useEffect } from "react";
import api from "../services/api";

export const useFetchBooksAndUsers = () => {
  // states to save users and books
  const [users, setUsers] = useState<any[]>([]);
  const [books, setBooks] = useState<any[]>([]);

  // Api getters
  const retrieveUsers = async () => {
    const responseUsers = await api.get<string[]>("/users");
    return responseUsers;
  };
  const retrieveBooks = async () => {
    const responseBooks = await api.get("/books");
    return responseBooks;
  };
  // updates the setters
  useEffect(() => {
    const getAllUsers = async () => {
      const allUsers = await retrieveUsers();
      if (allUsers) setUsers(allUsers.data);
    };
    getAllUsers();

    const getAllBooks = async () => {
      const allBooks = await retrieveBooks();
      if (allBooks) setBooks(allBooks.data);
    };

    getAllBooks();
  }, []);
  return [books, users];
};
