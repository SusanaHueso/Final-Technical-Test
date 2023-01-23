import { Styled } from "./searchbar.styles";

export const SearchBar = ({ setSearch }: any) => {
  return (
    <Styled.SearchBar>
      <label>Search</label>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
    </Styled.SearchBar>
  );
};
