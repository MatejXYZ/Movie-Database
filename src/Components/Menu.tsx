import { Button, HStack } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import { routes } from "../App";

const Menu = () => {
  return (
    <HStack w="full" justify="center" bg="gray.200" spacing="none">
      {[
        { title: "Search", route: routes.search },
        { title: "Favourites", route: routes.favourites },
      ].map(({ title, route }) => (
        <NavLink
          style={({ isActive }) => {
            return {
              fontWeight: isActive ? "bold" : "normal",
              backgroundColor: isActive ? "white" : "transparent",
            };
          }}
          to={route}
        >
          <Button
            h="full"
            rounded="0"
            py="10px"
            w="150px"
            variant="ghost"
            fontWeight="inherit"
          >
            {title}
          </Button>
        </NavLink>
      ))}
    </HStack>
  );
};

export default Menu;
