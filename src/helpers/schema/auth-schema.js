import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export const signUpSchema = Yup.object({
  name: Yup.string().required("Name is required!"),
  email: Yup.string().required("Email is required!"),
  password: Yup.string().min(8).required("Password is required!"),
});
