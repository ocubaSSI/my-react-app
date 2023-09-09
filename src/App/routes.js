import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import FlexBox from "../Views/FlexBox/FlexBox";
import Home from "../Views/Home/Home";

export const router = createBrowserRouter([
  {
    element: <App/>,
    id: "root",
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: "/flex",
        element: <FlexBox/>
      },
    ]
  }
])