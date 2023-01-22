import axios from "axios";
export const api = axios.create({ baseURL: " http://localhost:3006" });
// Api getters
export const retrieveUsers = async () => {
  try {
    return await api.get<string[]>("/users");
  } catch (error) {
    console.log(error);
  }
};
export const retrieveBooks = async () => {
  try {
    return await api.get("/books");
  } catch (error) {
    console.log(error);
  }
};
 