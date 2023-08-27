import {
  Box,
  Button,
  chakra,
  Grid,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useMemo, useState } from "react";
import type { SearchResponse as Response } from "../api/types";

import { useTitleSearch } from "../api/queries/search-parameter";
import MoviePreview from "../Components/MoviePreview";

const PAGE_SIZE = 10;

const List = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: searchData,
    isLoading,
    isFetching,
    isFetched,
  } = useTitleSearch<{ data: Response }>(
    { s: search, page },
    { query: { enabled: !!search } }
  );

  const totalResults = useMemo(
    () =>
      searchData?.data?.totalResults
        ? Number(searchData.data.totalResults)
        : null,
    [searchData?.data.totalResults]
  );

  const totalPages = useMemo(
    () => (totalResults ? Math.ceil(totalResults / PAGE_SIZE) : null),
    [totalResults]
  );

  return (
    <VStack align="center" p="5">
      <HStack
        id="search"
        as={chakra.form}
        onSubmit={(e) => {
          e.preventDefault();

          setSearch(text);
        }}
      >
        <Input
          w="250px"
          border="solid 1px"
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <Button
          type="submit"
          form="search"
          isDisabled={!text}
          isLoading={isFetching}
        >
          Search
        </Button>
      </HStack>
      {!searchData?.data?.Search?.length && isFetched && (
        <Box p="20px">No results</Box>
      )}
      {isLoading && isFetching ? null : (
        <Grid
          templateColumns="repeat(auto-fill, 200px)"
          h="fit-content"
          w={{ base: "full", xl: "1000px" }}
          justifyContent="center"
        >
          {searchData?.data?.Search?.map((item) => (
            <MoviePreview {...item}>{item.Title}</MoviePreview>
          ))}
        </Grid>
      )}
      {!!searchData?.data.Search?.length && (
        <HStack>
          <Button
            isDisabled={!text || page <= 1}
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >{`<`}</Button>
          <Box>{`Page ${page} / ${totalPages}`}</Box>
          <Button
            isDisabled={!text || page === totalPages}
            onClick={() =>
              setPage((prev) => (page === totalPages ? prev : prev + 1))
            }
          >{`>`}</Button>
        </HStack>
      )}
    </VStack>
  );
};

export default List;
