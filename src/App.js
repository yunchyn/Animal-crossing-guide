import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./routes/home";
import VillagerList from "./routes/villager-list";
import Villagers from "./routes/villagers";
import { Layout } from "./components/layout";
import CreatureList from "./routes/creature-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ItemList from "./routes/item-list";
import Creatures from "./routes/creatures";
import EventList from "./routes/event-list";
import Items from "./routes/items";
import RecipeList from "./routes/recipe-list";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./font.css";

const GlobalStyles = createGlobalStyle`
${reset};
body {
   font-family: "Korean-YGDL";
   overflow-x: hidden;
   overflow-y: scroll;
}
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    meta: { title: "Home - My App" },
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "villager-list",
        element: <VillagerList />,
      },
      {
        path: "villager-list/:villager",
        element: <Villagers />,
      },
      {
        path: "creature-list",
        element: <CreatureList />,
      },
      {
        path: "creature-list/:creature",
        element: <Creatures />,
      },
      {
        path: "item-list",
        element: <ItemList />,
      },
      {
        path: "item-list/:item",
        element: <Items />,
      },
      {
        path: "recipe-list",
        element: <RecipeList />,
      },
      {
        path: "event-list",
        element: <EventList />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <Helmet>
          <title>모동숲 가이드</title>
        </Helmet>
        <div className="App">
          <GlobalStyles />
          <RouterProvider router={router} />
        </div>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
