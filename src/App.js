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

const GlobalStyles = createGlobalStyle`
${reset};
@font-face {
  font-family: "Korean-YGDL";
  src: url("/fonts/KoreanYGDL.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Korean-YGDB";
  src: url("/fonts/KoreanYGDB.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}
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
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <GlobalStyles />
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
