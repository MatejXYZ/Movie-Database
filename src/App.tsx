import { ChakraProvider, theme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Axios from "axios";
import { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { API_ENDPOINT, API_KEY } from "./constants";
import FullscreenSpinner from "./Components/FullscreenSpinner";

const queryClient = new QueryClient({
  defaultOptions: { queries: { keepPreviousData: true } },
});

Axios.defaults.baseURL = API_ENDPOINT;

Axios.defaults.params = { apikey: API_KEY };

const List = lazy(() => import("./Screens/List"));
const Detail = lazy(() => import("./Screens/Detail"));

const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Detail />,
  },
  {
    path: "/",
    element: <List />,
  },
  {
    path: "*",
    element: <Navigate to={"/"} />,
  },
]);

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<FullscreenSpinner />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </ChakraProvider>
);
