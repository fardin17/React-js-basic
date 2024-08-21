import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { loginFormData } from "../helpers/constants";
import CustomInput from "../components/CustomInput";
import { userLogin } from "../services/authentication";

const Login = () => {
  const navigate = useNavigate();
  const { handleAuthenticate } = useContext(AuthContext);

  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [errorMessage, setErrormessage] = useState({ email: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    Object.keys(loginInfo).map((item) => {
      if (!loginInfo[item]) {
        flag = false;
        setErrormessage((prev) => ({ ...prev, [item]: `${item} is required!` }));
      } else setErrormessage((prev) => ({ ...prev, [item]: null }));
    });
    if (flag) {
      const token = userLogin(loginInfo);
      if (token) {
        handleAuthenticate(token);
        navigate("/dashboard");
      } else alert("User is not authenticated!");
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-amber-50  min-w-[600px] rounded-3xl">
        <p className="text-3xl font-bold pb-10">Login Form</p>
        <form onSubmit={submitHandler} className="flex flex-col items-center space-y-3">
          {loginFormData.map((item) => (
            <CustomInput
              key={item.name}
              {...{
                label: item.label,
                type: item.type,
                name: item.name,
                placeholder: item.placeholder,
                changeHandler,
                value: loginInfo[item.name],
                error: errorMessage[item.name],
              }}
            />
          ))}
          <button type="submit" className="text-lg font-bold bg-blue-700 text-white focus:outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
