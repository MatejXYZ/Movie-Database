import { useRecoilValue } from "recoil";
import { Box, Flex, Wrap } from "@chakra-ui/react";

import { favouriteMovieListState } from "../../state";

import Item from "./Item";

const Favourites = () => {
  const favouriteMovieList = useRecoilValue(favouriteMovieListState);

  return favouriteMovieList?.length ? (
    <Wrap>
      {favouriteMovieList.map((item) => (
        <Item id={item} />
      ))}
    </Wrap>
  ) : (
    <Flex justify="center" align="center">
      <Box>you don't have any favourites yet!</Box>
    </Flex>
  );
};

export default Favourites;
