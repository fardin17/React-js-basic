import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { loginFormData } from "../helpers/constants";
import CustomInput from "../components/CustomInput";
import { userLogin } from "../services/authentication";
import { loginSchema } from "../helpers/schema/auth-schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { handleAuthenticate } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  const submitHandler = (values) => {
    const token = userLogin(values);
    if (token) {
      handleAuthenticate(token);
      navigate("/dashboard");
    } else alert("User is not authenticated!");
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-amber-50  min-w-[600px] rounded-3xl">
        <p className="text-3xl font-bold pb-10">Login Form</p>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col items-center space-y-3">
          {loginFormData.map((item) => (
            <CustomInput
              key={item.name}
              {...{
                register,
                id: item.name,
                label: item.label,
                type: item.type,
                placeholder: item.placeholder,
                error: errors?.[item.name]?.message,
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
