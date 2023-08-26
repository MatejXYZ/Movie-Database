import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetId } from "../api/queries/id-parameter";
import FullscreenSpinner from "../Components/FullscreenSpinner";

type TDetail = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Director: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: string;
  Released: string;
  Response: "True" | "False";
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
};

const Detail = () => {
  const { id } = useParams();

  // if not found, display error with back button

  const {
    data: detail,
    isError,
    isLoading,
  } = useGetId<{ data: TDetail }>(
    { i: id ?? "" },
    { query: { enabled: !!id } }
  );

  if (isError || detail?.data.Response === "False")
    return (
      <Box>
        <Box>movie not found</Box>
      </Box>
    );

  return isLoading ? (
    <FullscreenSpinner />
  ) : (
    <span>{JSON.stringify(detail?.data, undefined, `\n\t`)}</span>
  );
};

export default Detail;
