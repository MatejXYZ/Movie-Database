import {
  Box,
  Button,
  chakra,
  Flex,
  Grid,
  HStack,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spinner,
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

  const [isUserEditingPage, setIsUserEditingPage] = useState(false);

  const [userPage, setUserPage] = useState(0);

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
          w={["200px", "250px"]}
          border="solid 1px"
          onChange={(e) => setText(e.currentTarget.value)}
          placeholder="Type something here..."
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
          templateColumns="repeat(auto-fit, 200px)"
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
        <Box>
          {isUserEditingPage ? (
            <HStack>
              <NumberInput
                size="sm"
                maxW={16}
                min={0}
                max={totalPages ?? 0}
                value={userPage}
                onChange={(value) => setUserPage(Number(value))}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Box> / {totalPages}</Box>
              <Button
                size="sm"
                onClick={() => {
                  setPage(userPage);

                  setIsUserEditingPage(false);
                }}
              >
                Go
              </Button>
            </HStack>
          ) : (
            <HStack>
              <Button
                isDisabled={!text || page <= 1}
                onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
              >{`<`}</Button>
              <Flex justify="center" minW="100px">
                {isFetching ? (
                  <Spinner />
                ) : (
                  <Button
                    variant="link"
                    fontWeight="normal"
                    color="black"
                    onClick={() => {
                      setUserPage(page);

                      setIsUserEditingPage((prev) => !prev);
                    }}
                  >{`Page ${page} / ${totalPages}`}</Button>
                )}
              </Flex>
              <Button
                isDisabled={!text || page === totalPages}
                onClick={() =>
                  setPage((prev) => (page === totalPages ? prev : prev + 1))
                }
              >{`>`}</Button>
            </HStack>
          )}
        </Box>
      )}
    </VStack>
  );
};

export default List;
