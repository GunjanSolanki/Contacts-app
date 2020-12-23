import React from "react";
import { CreateContactUI } from "../../../layouts/Contacts/Create";
import useForm from "./useForm";

const CreateContactContainer = () => {
  return (<CreateContactUI form={useForm()}/>);
}

export default CreateContactContainer;