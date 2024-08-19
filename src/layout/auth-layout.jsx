import { useContext } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const AuthLayout = () => {
  const { isAuthenticated } = useContext(AuthContext);
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <div>
      <div className="flex gap-2 px-4 py-3 bg-gray-200">
        <Link to="/">Home</Link>
        <Link to="/auth/login">Login</Link>
        <Link to="/auth/signup">Sign Up</Link>
      </div>
      This is auth layout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
