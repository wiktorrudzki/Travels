import { RegisterRequest } from "@/types/auth";
import { Formik } from "formik";
import { useRegister } from "../hooks";
import RegisterFormInputs from "./RegisterFormInputs";
import React from "react";

const initialValues: RegisterRequest = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const { registerSchema, isLoading, onSubmit } = useRegister();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={onSubmit}
    >
      {(props) => <RegisterFormInputs isLoading={isLoading} {...props} />}
    </Formik>
  );
};

export default RegisterForm;
