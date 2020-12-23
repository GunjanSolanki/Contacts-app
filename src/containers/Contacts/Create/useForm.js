import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../../context/Provider";
import createContact from "../../../context/actions/contacts/createContact";
import clearCreateContact from "../../../context/actions/contacts/clearCreateContact";

export default () => {
  const [form, setForm] = useState({});
  const history = useHistory({});

  const { 
    contactsDispatch, 
    contactsState: {
      addContact: { loading, error, data }
    },
  } = useContext(GlobalContext)

  useEffect(() => {
    if(data) {
      history.push("/")
    }
    return () => {
      clearCreateContact()(contactsDispatch)
    }
  }, [data])

  const formHalfFilled = Object.values(form).filter((item) => 
    item && item !== "").length > 0 && !data;

  const onChange= (e, { name, value }) => {
    setForm({...form, [name]: value});
  }

  console.log("form", form)
  console.log("data", data)
  console.log("form filled ?", formHalfFilled)
  // console.log("error", error)

  const contactFormInValid = !form.first_name?.length || 
                             !form.last_name?.length ||
                             !form.country_code?.length||
                             !form.phone_number?.length

                             
  const onSubmit = () => {    
    console.log("Form => ", form);
    createContact(form)(contactsDispatch);
  }

  return { form, onChange, contactFormInValid, onSubmit, loading, error, formHalfFilled };
}