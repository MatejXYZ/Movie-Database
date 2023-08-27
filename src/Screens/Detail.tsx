import { useCallback, useMemo } from "react";
import {
  Box,
  Grid,
  GridItem,
  Icon,
  Image,
  Stack,
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

  const { Poster, Title, Plot, Ratings, Type } = detail?.data ?? {};

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
      <Stack direction={["column", null, "row"]} position="relative">
        <Box
          boxShadow="base"
          aspectRatio={2 / 3}
          overflow="hidden"
          minW={["250px", "300px"]}
          w={["full", null, "500px"]}
          maxW={["500px", null, "none"]}
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
            w={["full", null, "auto"]}
            fontSize="32px"
            textAlign="center"
            fontWeight="bold"
            lineHeight="1"
          >
            {Title}
          </Box>
          <VStack align="start">
            {(["Year", "Genre", "Runtime"] as const).flatMap((item) => {
              const value = detail.data[item];

              return !value || value === "N/A" ? (
                []
              ) : (
                <Box lineHeight="1">{value}</Box>
              );
            })}
            <Grid templateColumns="70px 1fr">
              {(["Director", "Actors", "Writer"] as const).map((key) =>
                renderDetailRow(key)
              )}
            </Grid>
            <Box maxW="1000px" lineHeight="1">
              {Plot}
            </Box>
          </VStack>
          <VStack align="start">
            <Grid templateColumns="120px 1fr">
              {(["Country", "Language"] as const).map((key) =>
                renderDetailRow(key)
              )}
              {Type === "series" && renderDetailRow("totalSeasons", "Seasons")}
            </Grid>
            <VStack align="start" spacing="0">
              <Box>Ratings</Box>
              <Grid templateColumns="120px 1fr">
                {Ratings?.map((item) => renderRow(item, "Value", item.Source))}
                {(["Metascore", "imdbRating", "imdbVotes"] as const).map(
                  (item) => renderDetailRow(item)
                )}
              </Grid>
            </VStack>
          </VStack>
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
      </Stack>
    </VStack>
  );
};

export default Detail;
