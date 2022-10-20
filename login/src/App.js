import "./App.css";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Components/Main";
import Register from "./Components/Register";
import Section from "./Components/Section";
import Hidden from "./Components/Hidden";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Components/Profile";
import Varified from "./Components/Varified";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/section",
          element: <Section></Section>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              {" "}
              <Profile></Profile>
            </PrivateRoute>
          ),
        },
        {
          path: "/hidden",
          element: (
            <PrivateRoute>
              <Hidden></Hidden>
            </PrivateRoute>
          ),
        },
        {
          path: "/varified",
          element: (
            <PrivateRoute>
              <Varified></Varified>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
