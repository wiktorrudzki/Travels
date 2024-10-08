import { RegisterRequest } from "@/types/auth";
import { Formik } from "formik";
import { useRegister } from "../hooks";
import RegisterFormInputs from "./RegisterFormInputs";

const initialValues: RegisterRequest = {
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const { registerSchema, onSubmit } = useRegister();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {(props) => <RegisterFormInputs {...props} />}
    </Formik>
  );
};

export default RegisterForm;
