import { Box, Flex, GridItem, Icon, Image, VStack } from "@chakra-ui/react";
import { FC, PropsWithChildren, startTransition, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { SearchResult } from "../api/types";
import { useFavourites } from "../hook";

import { ReactComponent as StarIcon } from "../assets/star.svg";

type MoviePreviewProps = SearchResult &
  PropsWithChildren & { isFavourite?: boolean };

const MoviePreview: FC<MoviePreviewProps> = ({
  imdbID,
  isFavourite,
  Title,
  Poster,
}) => {
  const navigate = useNavigate();

  const { getIsFavourite, toggleIsFavourite } = useFavourites();

  const lIsFavourite = useMemo(
    () => isFavourite ?? getIsFavourite(imdbID),
    [getIsFavourite, imdbID, isFavourite]
  );

  return (
    <GridItem p="5px" w="200px" h="300px">
      <VStack
        bg="gray.200"
        w="full"
        h="full"
        justify="start"
        p="5px"
        px="20px"
        rounded="5px"
        cursor="pointer"
        onClick={() => {
          startTransition(() => {
            navigate(`/${imdbID}`);
          });
        }}
        position="relative"
        opacity="0.95"
        _hover={{ opacity: "1", boxShadow: "0 0 15px #dedede" }}
        transition="opacity 0.25s, box-shadow 0.25s"
      >
        <Box
          boxShadow="base"
          flex="0.75"
          aspectRatio={2 / 3}
          bg="lightblue"
          overflow="hidden"
        >
          <Image w="full" h="full" src={Poster} objectFit="cover" />
        </Box>
        <Flex flex="0.25" w="full" direction="column" justify="center">
          <Box textAlign="center" fontWeight="bold" lineHeight="1">
            {Title}
          </Box>
        </Flex>
        <Box
          onClick={(e) => {
            e.stopPropagation();

            toggleIsFavourite(imdbID);
          }}
          position="absolute"
          right="15px"
          top="15px"
          w="30px"
          h="30px"
        >
          <Icon
            w="full"
            h="full"
            as={StarIcon}
            stroke="#000"
            opacity={lIsFavourite ? "0.85" : "0.4"}
            fill={lIsFavourite ? "yellow" : "white"}
            _hover={{ fill: "yellow.300", opacity: "0.85" }}
            _active={{ fill: "yellow.400" }}
            transition="fill 0.25s, stroke 0.25s, opacity 0.25s"
          />
        </Box>
      </VStack>
    </GridItem>
  );
};

export default MoviePreview;
