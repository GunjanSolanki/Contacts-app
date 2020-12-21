import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory({});

  const { 
    authDispatch, 
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext)
  
  useEffect(() => {
    if(error) {
      for (const item in error) {
        setFieldErrors({...fieldErrors, [item]: error[item]})
      }
    }
  }, [error])

  useEffect(() => {
    if(data) {
      history.push("/auth/login")
    }
  }, [data])

  const onChange= (e, { name, value }) => {
    setForm({...form, [name]: value});
  }

  console.log("form", form)
  console.log("data", data)
  console.log("error", error)
  console.log("fieldErrors =>", fieldErrors)

  const registerFormInValid = 
          !form.username?.length || 
          !form.first_name?.length || 
          !form.last_name?.length ||   
          !form.email?.length || 
          !form.password?.length

  const onSubmit = () => {    
    setFieldErrors({})
    console.log("Form => ", form);
    register(form)(authDispatch);
  }

  return { form, onChange, registerFormInValid, onSubmit, loading, fieldErrors };
}