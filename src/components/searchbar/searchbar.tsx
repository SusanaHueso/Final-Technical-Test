import { getSuggestedQuery } from "@testing-library/react";
import { useState } from "react";

export const SearchBar = ({ setSearch }: any) => {
  return (
    <div>
      <label>Search</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
    </div>
  );
};
