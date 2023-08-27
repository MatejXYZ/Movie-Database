import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "axios";
import { Suspense, lazy } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import FullscreenSpinner from "./Components/FullscreenSpinner";
import Menu from "./Components/Menu";

import { API_ENDPOINT, API_KEY } from "./constants";

export const routes = {
  detail: "/:id",
  favourites: "favourites",
  search: "/search",
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true } },
});

Axios.defaults.baseURL = API_ENDPOINT;

Axios.defaults.params = { apikey: API_KEY };

const List = lazy(() => import("./Screens/List"));
const Detail = lazy(() => import("./Screens/Detail"));
const Favourites = lazy(() => import("./Screens/Favourites"));

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FullscreenSpinner />}>
        <RecoilRoot>
          <BrowserRouter>
            <Menu />
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
