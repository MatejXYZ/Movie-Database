import { FC } from "react";

import { useGetId } from "../../api/queries/id-parameter";
import type { Detail as TDetail } from "../../api/types";

import MoviePreview from "../../Components/MoviePreview";

type ItemProps = {
  id: string;
};

const Item: FC<ItemProps> = ({ id }) => {
  const { data: detail, isFetched } = useGetId<{ data: TDetail }>(
    { i: id ?? "" },
    { query: { enabled: !!id } }
  );

  if (!isFetched || !detail?.data || detail.data.Response === "False")
    return null;

  return <MoviePreview {...detail.data}>{detail.data.Title}</MoviePreview>;
};

export default Item;
