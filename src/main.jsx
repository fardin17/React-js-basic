import React from "react";
import ReactDOM from "react-dom/client";
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
import ProductCartContextProvider from "./context/product-cart-context.jsx";
import Cart from "./pages/cart.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedLayout />,
    children: [
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <ProductList />,
      },
      {
        path: "products/:id",
        element: <ProductDetails />,
      },
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

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ProductCartContextProvider>
            <RouterProvider router={router} />
          </ProductCartContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
