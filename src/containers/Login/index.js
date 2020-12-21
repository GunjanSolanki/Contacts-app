import React, { useContext } from "react";
import LoginUI from "../../layouts/Login";
import useForm from "./useForm";

const LoginContainer = () => {

  return (
    <LoginUI form={useForm()}/>
  );
}

export default LoginContainer;