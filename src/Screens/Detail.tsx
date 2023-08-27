import { useCallback, useMemo } from "react";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Icon,
  Image,
  VStack,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetId } from "../api/queries/id-parameter";
import type { Detail as TDetail } from "../api/types";

import FullscreenSpinner from "../Components/FullscreenSpinner";

import { ReactComponent as StarIcon } from "../assets/star.svg";

import { useFavourites } from "../hook";

const Detail = () => {
  const { id } = useParams();

  const { toggleIsFavourite, getIsFavourite } = useFavourites();

  const isFavourite = useMemo(
    () => (id ? getIsFavourite(id) : false),
    [getIsFavourite, id]
  );

  const {
    data: detail,
    isError,
    isLoading,
  } = useGetId<{ data: TDetail }>(
    { i: id ?? "" },
    { query: { enabled: !!id } }
  );

  const { Poster, Title, Year, Runtime, Genre, Plot, Ratings, Type } =
    detail?.data ?? {};

  const renderRow: <T>(
    obj: T,
    key: keyof T,
    altTitle?: string
  ) => JSX.Element | null = (obj, key, altTitle) => {
    const value = obj[key];

    if (!value || typeof value !== "string" || value === "N/A") return null;

    return (
      <>
        <GridItem lineHeight="1" color="gray.400">
          {altTitle ?? (key as string)}:
        </GridItem>
        <GridItem lineHeight="1">{value}</GridItem>
      </>
    );
  };

  const renderDetailRow = useCallback(
    (key: keyof TDetail, altTitle?: string) =>
      detail ? renderRow(detail.data, key, altTitle) : null,
    [detail]
  );

  if (isError || detail?.data.Response === "False")
    return (
      <Box>
        <Box>Movie not found</Box>
      </Box>
    );

  return isLoading ? (
    <FullscreenSpinner />
  ) : (
    <VStack p="25px" align="start">
      <HStack position="relative">
        <Box
          boxShadow="base"
          aspectRatio={2 / 3}
          overflow="hidden"
          w={{ base: "full", xl: "500px" }}
        >
          <Image w="full" h="full" src={Poster} objectFit="cover" />
        </Box>
        <VStack
          spacing="3"
          h="full"
          justify="start"
          alignSelf="stretch"
          align="start"
        >
          <Box
            fontSize="32px"
            textAlign="center"
            fontWeight="bold"
            lineHeight="1"
          >
            {Title}
          </Box>
          <VStack align="start" spacing="0.5">
            <Box lineHeight="1.15">{Type}</Box>
            <Box lineHeight="1.15">{Year}</Box>
            <Box lineHeight="1.15">{Genre}</Box>
            <Box lineHeight="1.15">{Runtime}</Box>
            <Grid gap="0.5" templateColumns="60px 1fr">
              {(["Director", "Actors", "Writer"] as const).map((key) =>
                renderDetailRow(key)
              )}
            </Grid>
            <Box>{Plot}</Box>
          </VStack>
          <Box>
            <Grid gap="0.5" templateColumns="120px 1fr">
              {(["Country", "Language"] as const).map((key) =>
                renderDetailRow(key)
              )}
              {Type === "series" && renderDetailRow("totalSeasons", "Seasons")}
            </Grid>
            <VStack align="start" spacing="0">
              <Box>Ratings</Box>
              <Grid gap="0.5" templateColumns="120px 1fr">
                {Ratings?.map((item) => renderRow(item, "Value", item.Source))}
                {(["Metascore", "imdbRating", "imdbVotes"] as const).map(
                  (item) => renderDetailRow(item)
                )}
              </Grid>
            </VStack>
          </Box>
        </VStack>
        <Box
          onClick={(e) => {
            e.stopPropagation();

            if (id) toggleIsFavourite(id);
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
            opacity={isFavourite ? "0.85" : "0.4"}
            fill={isFavourite ? "yellow" : "white"}
            _hover={{ fill: "yellow.300", opacity: "0.85" }}
            _active={{ fill: "yellow.400" }}
            transition="fill 0.25s, stroke 0.25s, opacity 0.25s"
          />
        </Box>
      </HStack>
    </VStack>
  );
};

export default Detail;
