import { useContext } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
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
    <div>
      <div className="flex gap-2 px-4 py-3 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/product-list">Product List</Link>
        <button onClick={logOut}>Log out</button>
      </div>
      This is protected layout
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
