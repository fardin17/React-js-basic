import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Signup = () => {
  const { handleAuthenticate } = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogin = () => {
    handleAuthenticate();

    localStorage.setItem("token", "loggedin");
    navigate("/dashboard");
  };
  return <div onClick={handlelogin}>Sign Up Page</div>;
};

export default Signup;
