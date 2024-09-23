import { LoginCredentials } from "@/types/auth";
import { Formik } from "formik";
import LoginFormInputs from "./LoginFormInputs";
import { useLogin } from "../hooks";

const initialValues: LoginCredentials = { email: "", password: "" };

const LoginForm = () => {
  const { loginSchema, onSubmit } = useLogin();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={onSubmit}
    >
      {(props) => <LoginFormInputs {...props} />}
    </Formik>
  );
};

export default LoginForm;
