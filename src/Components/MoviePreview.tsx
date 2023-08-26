import { Box, Flex, VStack } from "@chakra-ui/react";
import { FC, PropsWithChildren, startTransition, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { SearchResult } from "../api/types";
import { useFavourites } from "../hook";

type MoviePreviewProps = SearchResult &
  PropsWithChildren & { isFavourite?: boolean };

const MoviePreview: FC<MoviePreviewProps> = ({
  children,
  imdbID,
  isFavourite,
}) => {
  const navigate = useNavigate();

  const { getIsFavourite, toggleIsFavourite } = useFavourites();

  const lIsFavourite = useMemo(
    () => isFavourite ?? getIsFavourite(imdbID),
    [getIsFavourite, imdbID, isFavourite]
  );

  return (
    <VStack
      justify="start"
      align="end"
      p="5px"
      w="100px"
      h="100px"
      bg="seagreen"
      rounded="5px"
      cursor="pointer"
      onClick={() => {
        startTransition(() => {
          navigate(`/${imdbID}`);
        });
      }}
    >
      <Box
        p="5px"
        bg={lIsFavourite ? "yellow" : "white"}
        _hover={{
          opacity: "0.8",
        }}
        border="solid"
        onClick={(e) => {
          e.stopPropagation();

          toggleIsFavourite(imdbID);
        }}
      />
      <Box lineHeight="1">{children}</Box>
    </VStack>
  );
};

export default MoviePreview;
