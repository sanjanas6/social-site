import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Navbar from "./components/navbar/navbar";
import Rightbar from "./components/rightbar/rightbar";
import Leftbar from "./components/leftbar/leftbar";
import Profile from "./pages/profile/Profile";
import Home from "./pages/home/Home";
import { useContext } from "react";
import "./style.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";

function App() {

const {currentUser} = true;

 const {darkMode} = useContext(DarkModeContext)

  const Layout = () =>{
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{display:"flex"}}>
          <Leftbar />
          <div style={{flex:"6"}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({children}) =>{
    if(false){
      return <Navigate to="/login" />
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path:"/",
      element: 
      <ProtectedRoute>
      <Layout />
      </ProtectedRoute>,
      children: [
        {
          path:"/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
    );
}

export default App;
