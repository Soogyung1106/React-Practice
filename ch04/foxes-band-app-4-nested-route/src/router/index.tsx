import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Members from "../pages/Members";
import SongList from "../pages/SongList";
import Player from "../components/Player";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About title={"여우와 늙다리들"} /> },
      { path: "members", element: <Members /> },
      {
        path: "songs",
        element: <SongList />,
        children: [{ path: ":id", element: <Player /> }],
      },
    ],
  },
]);

export default router;
