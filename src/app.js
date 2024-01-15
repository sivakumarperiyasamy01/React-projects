import React, { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "../src/components/Body.js";
import Header from "./components/Header.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";
import Error from "./components/error.js";
import Resmenu from "./components/resmenu.js";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Appstore from "../src/utills/appstore.js";
import { Provider } from "react-redux";
import Cart from "./components/cart.js";

const Grocery = lazy(() => import("./components/grocerry.js"));

const Applayout = () => {
  const [username, setusername] = useState();

  useEffect(() => {
    const data = {
      name: " ",
    };
    setusername(data.name);
  }, []);

  return (
    <Provider store={Appstore}>
      <div id="applayout">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <Resmenu />,
      },
      {
        path: "/Grocerry",
        element: (
          <Suspense fallbakc={<h1>welcome loding...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/Cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
