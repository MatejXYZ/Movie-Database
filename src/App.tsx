import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "axios";
import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { API_ENDPOINT, API_KEY } from "./constants";

const queryClient = new QueryClient();

Axios.defaults.baseURL = API_ENDPOINT;

Axios.defaults.params = { apikey: API_KEY };

const List = lazy(() => import("./Screens/List"));

const router = createBrowserRouter([
  {
    path: "*",
    element: <List />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </ChakraProvider>
);
