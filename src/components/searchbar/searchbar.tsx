import { Styled } from "./searchbar.styles";

export const SearchBar = ({ setSearch }: any) => {
  return (
    <Styled.SearchBar>
      <Styled.Label>Search </Styled.Label>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
    </Styled.SearchBar>
  );
};
