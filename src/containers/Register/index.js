import React, { useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import RegisterUI from "../../layouts/Register";
import useForm from "./useForm";

const RegisterContainer = () => {
  const { 
    authDispatch, 
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext)

  return (
    <RegisterUI form={useForm()}/>
  );
}

export default RegisterContainer;