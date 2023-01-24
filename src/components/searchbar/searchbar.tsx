import { Styled } from "./searchbar.styles";
export type SearchType = {
  setSearch: React.Dispatch<React.SetStateAction<string | undefined>>;
};
export const SearchBar: React.FC<SearchType> = ({ setSearch }) => {
  return (
    <Styled.SearchBar>
      <Styled.Label>Search </Styled.Label>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
    </Styled.SearchBar>
  );
};
