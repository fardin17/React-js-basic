import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthLayout from "./layout/auth-layout.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import ProtectedLayout from "./layout/protected-layout.jsx";
import Dashboard from "./pages/dashboard.jsx";
import ProductList from "./pages/product-list.jsx";
import ProductDetails from "./pages/product-details.jsx";
import AuthContextProvider from "./context/auth-context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <ProtectedLayout />,
    children: [{ path: "", element: <Dashboard /> }],
  },
  {
    path: "products",
    element: <ProtectedLayout />,
    children: [
      { path: "", element: <ProductList /> },
      { path: ":id", element: <ProductDetails /> },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
