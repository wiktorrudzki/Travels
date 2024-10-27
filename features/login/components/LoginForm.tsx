import { LoginRequest } from "@/types/auth";
import { Formik } from "formik";
import LoginFormInputs from "./LoginFormInputs";
import { useLogin } from "../hooks";

const initialValues: LoginRequest = { email: "", password: "" };

const LoginForm = () => {
  const { loginSchema, isLoading, onSubmit } = useLogin();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LoginFormInputs isLoading={isLoading} {...props} />}
    </Formik>
  );
};

export default LoginForm;
