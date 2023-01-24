import * as React from "react";
import { Box, Pagination, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { Styled } from "./pagination.styles";
import { UsersAndBooks } from "../../App";
export const MyPagination = ({ search, setBooksPagination }: any) => {
  const { users, books } = useContext(UsersAndBooks);

  const [recordsPerPage, setRecordsPerPage] = useState(3);

  const nPages = Math.ceil(books.length / recordsPerPage);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: any, value: React.SetStateAction<number>) => {
    setPage(value);
  };
  const lastSlice = page * recordsPerPage;
  const firstSlice = lastSlice - recordsPerPage;
  useEffect(() => {
    if (typeof search !== "undefined" && search.length > 0) {
      setRecordsPerPage(books.length);
      setPage(1);
    } else {
      setRecordsPerPage(3);
    }
  }, [books.length, search]);

  useEffect(() => {
    setBooksPagination({ firstSlice: firstSlice, lastSlice: lastSlice });
  }, [firstSlice, lastSlice]);

  return (
    <Styled.Pagination>
      <Box
        sx={{
          margin: "auto",
          width: "fit-content",
          alignItems: "center",
          height: "fit-content",
        }}
      >
        <Pagination
          sx={{ button: { color: "#ffffff", fontWeight: "bold" } }}
          count={nPages}
          page={page}
          onChange={handleChange}
        />
      </Box>
    </Styled.Pagination>
  );
};
