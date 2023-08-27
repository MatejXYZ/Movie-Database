import { useRecoilValue } from "recoil";
import { Box, Flex, Grid, VStack } from "@chakra-ui/react";

import { favouriteMovieListState } from "../../state";

import Item from "./Item";

const Favourites = () => {
  const favouriteMovieList = useRecoilValue(favouriteMovieListState);

  return (
    <VStack p="5" align="center">
      {favouriteMovieList?.length ? (
        <Grid
          templateColumns="repeat(auto-fill, 200px)"
          h="fit-content"
          w={{ base: "full", xl: "1000px" }}
          justifyContent="center"
        >
          {favouriteMovieList.map((item) => (
            <Item id={item} />
          ))}
        </Grid>
      ) : (
        <Flex justify="center" align="center">
          <Box>you don't have any favourites yet!</Box>
        </Flex>
      )}
    </VStack>
  );
};

export default Favourites;
