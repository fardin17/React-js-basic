import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { signupFormData } from "../helpers/constants";
import CustomInput from "../components/CustomInput";
import { userSignUp } from "../services/authentication";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { signUpSchema } from "../helpers/schema/auth-schema";

const Signup = () => {
  const navigate = useNavigate();
  const { handleAuthenticate } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signUpSchema) });

  const submitHandler = (values) => {
    const isRegestered = userSignUp(values);
    if (isRegestered) {
      handleAuthenticate(values.email);
      navigate("/dashboard");
    } else alert("User is regestered already!");
    reset();
  };
  const pass_value = watch("password");
  const confirm_pass_value = watch("confirm_password");

  console.log({ pass_value, confirm_pass_value });

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-amber-50  min-w-[600px] rounded-3xl">
        <p className="text-3xl font-bold pb-10">SignUp Form</p>
        <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col items-center space-y-3">
          {signupFormData.map((item) => (
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
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
