import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spinner,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { FC, PropsWithChildren, useMemo, useState } from "react";
import { useTitleSearch } from "../api/queries/search-parameter";

const PAGE_SIZE = 10;

type Result = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

type Search = {
  Search: Result[];
  totalResults: string;
  Response: string;
};

const ResultItem: FC<Result & PropsWithChildren> = ({ children }) => {
  return (
    <Flex
      w="100px"
      h="100px"
      bg="seagreen"
      rounded="5px"
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
};

const List = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const {
    data: searchData,
    isLoading,
    isFetching,
  } = useTitleSearch<{ data: Search }>(
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
      <HStack>
        <Input
          w="250px"
          border="solid 1px"
          onChange={(e) => setText(e.currentTarget.value)}
        />
        <Button
          onClick={() => {
            setSearch(text);
          }}
          isDisabled={!text}
        >
          Search
        </Button>
      </HStack>
      {isLoading && isFetching ? (
        <Spinner />
      ) : (
        <Wrap>
          {searchData?.data?.Search?.map((item) => (
            <ResultItem {...item}>{item.Title}</ResultItem>
          ))}
        </Wrap>
      )}
      {!!searchData && (
        <HStack>
          <Button
            isDisabled={!text || page <= 1}
            onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
          >{`<`}</Button>
          <Box>{`page ${page} / ${totalPages}`}</Box>
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
