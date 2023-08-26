import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { useGetId } from "../api/queries/id-parameter";
import FullscreenSpinner from "../Components/FullscreenSpinner";
import type { Detail as TDetail } from "../api/types";

const Detail = () => {
  const { id } = useParams();

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
