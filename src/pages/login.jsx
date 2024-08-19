import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Login = () => {
  const { handleAuthenticate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogin = () => {
    localStorage.setItem("token", "loggedin");
    handleAuthenticate();
    navigate("/dashboard");
  };
  return <div onClick={handlelogin}>Login page</div>;
};

export default Login;
