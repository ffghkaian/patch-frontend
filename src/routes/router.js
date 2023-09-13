import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from "../pages/homePage/homePage"
import Pes2021 from "../pages/pes2021/pes2021"
import Details from "../components/details/details"

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <div> Page not found </div>,
    },
    {
      path: "/pes-2021",
      element: <Pes2021 />,
    },
    {
      path: "/:version/:category/:id",
      element: <Details />
    },
  ])
  
export default function Router({children}) {
  return (
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    )
}