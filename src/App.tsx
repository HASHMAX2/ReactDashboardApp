import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import Login from "./pages/Login/Login";
import "./styles/global.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="main">
        <Navbar></Navbar>
        <div className="container">
          <div className="menuContainer">
            <Menu></Menu>
          </div>
          <div className="contentContainer">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "users",
          element: <Users></Users>,
        },
        {
          path: "products",
          element: <Products></Products>,
        },
      ],
    },
    { path: "login", element: <Login></Login> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
