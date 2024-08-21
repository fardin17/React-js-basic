import { useContext } from "react";
import { Navigate, NavLink, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const { isAuthenticated, handleAuthenticate } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" />;
  }

  const logOut = () => {
    localStorage.removeItem("token");
    handleAuthenticate();
    navigate("/auth/login");
  };
  return (
    <div className="h-screen ">
      <div className="flex justify-between px-4 py-3 bg-gray-200">
        <div className="flex gap-2 items-center">
          <NavLink to="/dashboard" className={({ isActive }) => (isActive ? "text-red-500" : "text-yellow-500")}>
            Dashboard
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => (isActive ? "text-red-500" : "text-yellow-500")}>
            Product List
          </NavLink>
        </div>
        <button onClick={logOut} className="bg-red-500 text-white font-bold">
          Log out
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
