import Browse from "./Browse";
import Login from "./Login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import SingleMovie from "./SingleMovie";
import Cart from "./Cart";
import Error from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/movie/:id",
      element: <SingleMovie />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
