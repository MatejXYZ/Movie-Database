import { useRecoilState } from "recoil";
import { useCallback } from "react";

import { favouriteMovieListState } from "./state";

export const useFavourites = () => {
  const [favourites, setFavourites] = useRecoilState(favouriteMovieListState);

  const toggleIsFavourite = (id: string) => {
    setFavourites((prev) => {
      const index = prev.indexOf(id);

      if (index > -1) return prev.slice(0, index).concat(prev.slice(index + 1));

      return prev.concat(id);
    });
  };

  const getIsFavourite = useCallback(
    (id: string) => favourites.includes(id),
    [favourites]
  );

  return { toggleIsFavourite, favourites, getIsFavourite };
};
