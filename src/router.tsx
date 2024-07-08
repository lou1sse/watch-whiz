import { createBrowserRouter } from "react-router-dom"

import { LayoutComponent } from "@LayoutComponents"
import { HomePage, MovieDetailsPage } from "@Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "/movie/:movie_id",
        element: <MovieDetailsPage />
      }
    ]
  }
])

export default router
