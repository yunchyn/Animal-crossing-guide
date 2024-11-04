import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Home from "./routes/home";
import VillagerList from "./routes/villager-list";
import Villagers from "./routes/villagers";
import Layout from "./components/layout";

const GlobalStyles = createGlobalStyle`
${reset};
@font-face {
  font-family: "Korean-YGDL";
  src: url("/fonts/KoreanYGDL.ttf") format("truetype");
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
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "villager-list",
        element: <VillagerList />,
      },
      {
        path: "villager-list/:villager",
        element: <Villagers />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
