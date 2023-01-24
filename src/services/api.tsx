import axios from "axios";
import { OnlyBookType } from "../components/book/book";
export const api = axios.create({ baseURL: " http://localhost:3006" });
// Api getters

export type UserType = {
  id: string;
  Name: string;
  Surname: string;
  Email: string;
  Password: string;
  Favouritebookslist: OnlyBookType[];
  isAdmin: boolean;
};

export const retrieveUsers = async () => {
  try {
    return await api.get<UserType[]>("/users");
  } catch (error) {
    console.log(error);
  }
};
export const retrieveBooks = async () => {
  try {
    return await api.get<OnlyBookType[]>("/books");
  } catch (error) {
    console.log(error);
  }
};
