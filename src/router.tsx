import { createBrowserRouter } from "react-router-dom"

import { LayoutComponent } from "@LayoutComponents"
import { HomePage } from "@Pages"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "",
        element: <HomePage />
      }
    ]
  }
])

export default router
