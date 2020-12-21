import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";

export default () => {
  const [form, setForm] = useState({});
  const history = useHistory({});

  const { 
    authDispatch, 
    authState: {
      auth: { loading, error, data },
    },
  } = useContext(GlobalContext)

  useEffect(() => {
    if(data?.user) {
      history.push("/")
    }
  }, [data])

  const onChange= (e, { name, value }) => {
    setForm({...form, [name]: value});
  }

  console.log("form", form)
  console.log("data", data)
  console.log("error", error)

  const loginFormInValid = !form.username?.length || !form.password?.length;

  const onSubmit = () => {    
    console.log("Form => ", form);
    login(form)(authDispatch);
  }

  return { form, onChange, loginFormInValid, onSubmit, loading, error };
}