import { createBrowserRouter } from "react-router-dom"

import { LayoutComponent } from "@LayoutComponents"
import { HomePage, MovieDetailsPage, SearchPage } from "@Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/search", element: <SearchPage /> },
      { path: "/movie/:movie_id", element: <MovieDetailsPage /> }
    ]
  }
])

export default router
