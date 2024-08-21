import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import { signupFormData } from "../helpers/constants";
import CustomInput from "../components/CustomInput";
import { userSignUp } from "../services/authentication";

const Signup = () => {
  const navigate = useNavigate();
  const { handleAuthenticate } = useContext(AuthContext);

  const [signupInfo, setSignupInfo] = useState({ name: "", email: "", password: "" });
  const [errorMessage, setErrormessage] = useState({ name: "", email: "", password: "" });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    let flag = true;
    Object.keys(signupInfo).map((item) => {
      if (!signupInfo[item]) {
        flag = false;
        setErrormessage((prev) => ({ ...prev, [item]: `${item} is required!` }));
      } else setErrormessage((prev) => ({ ...prev, [item]: null }));
    });
    if (flag) {
      const isRegestered = userSignUp(signupInfo);
      if (isRegestered) {
        handleAuthenticate(signupInfo.email);
        navigate("/dashboard");
      } else alert("User is regestered already!");
    }
  };
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex flex-col items-center justify-center pt-20 pb-10 bg-amber-50  min-w-[600px] rounded-3xl">
        <p className="text-3xl font-bold pb-10">SignUp Form</p>
        <form onSubmit={submitHandler} className="flex flex-col items-center space-y-3">
          {signupFormData.map((item) => (
            <CustomInput
              key={item.name}
              {...{
                label: item.label,
                type: item.type,
                name: item.name,
                placeholder: item.placeholder,
                changeHandler,
                value: signupInfo[item.name],
                error: errorMessage[item.name],
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
