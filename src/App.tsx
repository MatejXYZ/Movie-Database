import { ChakraProvider, HStack, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "axios";
import { Suspense, lazy } from "react";
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import { API_ENDPOINT, API_KEY } from "./constants";
import FullscreenSpinner from "./Components/FullscreenSpinner";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true } },
});

Axios.defaults.baseURL = API_ENDPOINT;

Axios.defaults.params = { apikey: API_KEY };

const List = lazy(() => import("./Screens/List"));
const Detail = lazy(() => import("./Screens/Detail"));
const Favourites = lazy(() => import("./Screens/Favourites"));

const routes = {
  detail: "/:id",
  favourites: "favourites",
  search: "/",
};

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FullscreenSpinner />}>
        <RecoilRoot>
          <BrowserRouter>
            <HStack>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
                to={routes.favourites}
              >
                favourites
              </NavLink>
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                  };
                }}
                to={routes.search}
              >
                search
              </NavLink>
            </HStack>
            <Routes>
              <Route path={routes.detail} element={<Detail />} />
              <Route path={routes.favourites} element={<Favourites />} />
              <Route path={routes.search} element={<List />} />
              <Route path="*" element={<Navigate to={routes.search} />} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
      </Suspense>
    </QueryClientProvider>
  </ChakraProvider>
);
